import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import styled from "styled-components";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
const Div = styled.div`
  padding: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  .title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 1.7rem;
  }
  .avatar-wrapper {
    position: relative;
  }
  .avatar {
    display: flex;
    justify-content: center;
  }
  .avatar-image {
    border-radius: 50%;
    width: 200px;
    border: 1px solid #222d45;
  }
  .icon-btn-wrapper {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
  .icon-button-cus {
    background-color: #0464fc;
  }
`;
const Profile = () => {
  return (
    <Div>
      <Container fluid style={{ maxWidth: "50%" }}>
        <Row>
          <Col lg={12} className="title">
            Edit Profile
          </Col>
        </Row>
        <Row className="my-4">
          <Col lg={12} className="avatar">
            <div className="avatar-wrapper">
              <img
                src="https://haycafe.vn/wp-content/uploads/2022/01/Avatar-cute-chibi-nu-dang-yeu.jpg"
                alt=""
                className="avatar-image"
              />
              <div className="icon-btn-wrapper">
                <IconButton className="icon-button-cus">
                  <EditRoundedIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <TextField
              label={"First Name"}
              margin="normal"
              required
              fullWidth
              name="firstname"
              type="text"
            />
          </Col>
          <Col lg={6}>
            <TextField
              label={"Last Name"}
              margin="normal"
              required
              fullWidth
              name="lastname"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TextField
              label={"Username"}
              margin="normal"
              required
              fullWidth
              name="username"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TextField
              label={"Email"}
              margin="normal"
              required
              fullWidth
              name="email"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <TextField
              label={"Phone"}
              margin="normal"
              required
              fullWidth
              name="phone"
              type="text"
            />
          </Col>
          <Col lg={6}>
            <TextField
              label={"Date of Birth"}
              margin="normal"
              required
              fullWidth
              name="dob"
              type="text"
            />
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default Profile;
