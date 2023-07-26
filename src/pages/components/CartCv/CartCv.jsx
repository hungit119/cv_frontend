import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Col, Container, Row } from "react-bootstrap";
const Div = styled.div`
  margin-bottom: 24px;
  background-color: rgb(38, 50, 77);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1.25rem;
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
  position: relative;
  min-width: 260px;
  .content-card {
    padding: 24px;
    z-index: 2;
    position: relative;
  }
  .actions {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .avatar-cart {
    display: flex;
    min-width: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  .avatar-cart-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  .title-card {
    margin: 0px 0px 2px;
    font-size: 1.1rem;
    line-height: 1.2;
    font-weight: 400;
    font-family: NoirPro, Arial;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
  }
  .position-card {
    margin: 0;
    font-size: 0.875rem;
    font-family: NoirPro, Arial;
    font-weight: 400;
    line-height: 1.5;
  }
  .email-card {
    margin: 0px 0px 16px;
    font-size: 0.875rem;
    font-style: italic;
    font-family: NoirPro, Arial;
    font-weight: 400;
    line-height: 1.5;
  }
`;
const CartCv = ({ cv }) => {
  const [isPreviewed, setisPreviewed] = useState(true);
  return (
    <Div>
      <div className="content-card">
        <div className="avatar-cart">
          <img src={cv.userInfo.avatar} alt="" className="avatar-cart-image" />
        </div>
        <h4 className="title-card">{cv.userInfo.fullname}</h4>
        <p className="position-card">{cv.cvInfo.positionJob}</p>
        <p className="email-card">{cv.userInfo.email}</p>
        <div className="actions">
          <Row style={{ width: "100%" }}>
            <Col lg={6} md={6}>
              <Button
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: " rgb(245, 247, 250)",
                  color: "rgb(115, 82, 199)",
                  marginBottom: "4px",
                }}
              >
                EDIT
              </Button>
            </Col>
            <Col lg={6} md={6}>
              <Button
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: " rgb(115, 82, 199)",
                  marginBottom: "4px",
                }}
              >
                PREVIEW
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Div>
  );
};

export default CartCv;
