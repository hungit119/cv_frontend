import React from "react";
import styled from "styled-components";
import CartCv from "../CartCv/CartCv";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
const Div = styled.div`
  .avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
const ListCv = ({ cvs, isLoadingCvs }) => {
  return (
    <Div>
      <Row>
        {cvs && !isLoadingCvs ? (
          cvs.map((cv) => (
            <Col lg={6}>
              <CartCv cv={cv} />
            </Col>
          ))
        ) : (
          <>
            <Col lg={6}>
              <Card>
                <CardContent>
                  <Typography component="div">
                    <div className="avatar">
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    </div>
                    <Typography variant="h5" component="div">
                      <Skeleton animation="wave" height={34} />
                    </Typography>
                  </Typography>
                  <div className="name">
                    <Skeleton animation="wave" height={15} width="60%" />
                  </div>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Skeleton animation="wave" height={15} />
                  </Typography>
                  <Typography variant="body1" style={{ color: "#333" }}>
                    <Container>
                      <Row>
                        <Col>
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            height={50}
                          />
                        </Col>
                        <Col>
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            height={50}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardContent>
                  <Typography component="div">
                    <div className="avatar">
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    </div>
                    <Typography variant="h5" component="div">
                      <Skeleton animation="wave" height={34} />
                    </Typography>
                  </Typography>
                  <div className="name">
                    <Skeleton animation="wave" height={15} width="60%" />
                  </div>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Skeleton animation="wave" height={15} />
                  </Typography>
                  <Typography variant="body1" style={{ color: "#333" }}>
                    <Container>
                      <Row>
                        <Col>
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            height={50}
                          />
                        </Col>
                        <Col>
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            height={50}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Div>
  );
};

export default ListCv;
