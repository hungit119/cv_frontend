import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { Col, Container, Row } from "react-bootstrap";
const Div = styled.div`
  margin-bottom: 12px;
  .avatar {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  .name {
    text-transform: uppercase;
    font-weight: 600;
    color: #222d45;
  }
  .timer {
    display: flex;
    align-items: center;
    font-size: 12px;
    span {
      margin-left: 4px;
    }
  }
`;
const CartCv = ({ cv }) => {
  return (
    <Div>
      <Card>
        <CardContent>
          <Typography component="div">
            <div className="avatar">
              <Avatar src={cv.userInfo.avatar} />
            </div>
            <Typography variant="h5" component="div">
              {cv.cvInfo.positionJob}
            </Typography>
          </Typography>
          <div className="name">{cv.userInfo.fullname}</div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cv.userInfo.email}
          </Typography>
          <Typography variant="body1" style={{ color: "#333" }}>
            <Row>
              <Col lg={12} className="timer">
                <EditCalendarRoundedIcon />
                <span>{cv.createdAt}</span>
              </Col>
              <Col lg={12} className="timer">
                <UpdateRoundedIcon />
                <span>{cv.updatedAt}</span>
              </Col>
            </Row>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth startIcon={<EditRoundedIcon />}>
            Edit CV
          </Button>
        </CardActions>
      </Card>
    </Div>
  );
};

export default CartCv;
