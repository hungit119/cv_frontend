import { Box, Button, LinearProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
  .title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 600;
    font-size: 1.7rem;
  }
`;
const ChangePassword = () => {
  const sid = useSelector((state) => state.userReducer.user.sid);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const [form, setform] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleChangeFormInput = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleClickSaveChange = async () => {
    try {
      setIsSaving(true);
      await axios
        .post(`${config.API}/api/user/changePassword`, {
          ...form,
          sid,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          toast.success(response.message);
          setIsSaving(false);
          navigate("/profile");
        });
    } catch (error) {
      setIsSaving(false);
      toast.error(error.response.data.message, {
        theme: "colored",
      });
    }
  };
  return (
    <Div>
      <Container fluid style={{ maxWidth: "50%" }}>
        <Row>
          <Col lg={12} className="title">
            Change Password
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12}>
            <TextField
              label={"Old Password"}
              margin="normal"
              required
              fullWidth
              name="oldPassword"
              type="password"
              value={form.oldPassword}
              onChange={handleChangeFormInput}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TextField
              label={"New Password"}
              margin="normal"
              required
              fullWidth
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChangeFormInput}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TextField
              label={"Confirm New Password"}
              margin="normal"
              required
              fullWidth
              name="confirmNewPassword"
              type="password"
              value={form.confirmNewPassword}
              onChange={handleChangeFormInput}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {isSaving ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : (
              <Button
                fullWidth
                variant="contained"
                onClick={handleClickSaveChange}
              >
                Save changes
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default ChangePassword;
