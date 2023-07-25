import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import styled from "styled-components";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import avatarPath from "../../../access/avatar.jpg";
import { useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import { setAvatar } from "../../../features/UserSlice";
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [userInfoForm, setUserInfoForm] = useState(user);
  const [urlAvatar, setUrlAvatar] = useState("");
  const [openUploadAvata, setOpenUploadAvata] = React.useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [avata, setAvata] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleChangeUserInfoForm = (e) => {
    setUserInfoForm({ ...userInfoForm, [e.target.name]: e.target.value });
  };
  const handleClickSaveChanges = async () => {
    try {
      setIsSaving(true);
      const userInfoData = {
        ...userInfoForm,
        avatar: urlAvatar ? urlAvatar : userInfoForm.avatar,
      };
      await axios
        .post(`${config.API}/api/user/updateInfo`, {
          userInfoData,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          setIsSaving(false);
          toast.success(response.message);
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
    }
  };
  const handleClickOpenUploadAvata = () => {
    setOpenUploadAvata(true);
  };
  const handleUploadAvatar = async () => {
    try {
      setIsUploading(true);
      const data = new FormData();
      data.append("file", avata);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dhhahwrmr");
      data.append("folder", `${userInfoForm.email}/avatarProfile`);
      fetch("https://api.cloudinary.com/v1_1/dhhahwrmr/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUrlAvatar(data.url);
          dispatch(setAvatar(data.url));
          setOpenUploadAvata(false);
          setIsUploading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            theme: "colored",
          });
        });
    } catch (error) {}
  };
  const handleCloseUploadAvata = () => {
    setOpenUploadAvata(false);
  };
  return (
    <Div>
      <Dialog open={openUploadAvata} onClose={handleCloseUploadAvata}>
        <DialogTitle>Đăng Ảnh</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose File</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File"
            type="file"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setAvata(e.target.files[0]);
              setIsSelected(true);
            }}
          />
        </DialogContent>
        <DialogActions>
          {isUploading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            <>
              <Button onClick={handleCloseUploadAvata}>Cancel</Button>
              <Button onClick={handleUploadAvatar}>Upload</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
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
                src={
                  urlAvatar
                    ? urlAvatar
                    : userInfoForm.avatar
                    ? userInfoForm.avatar
                    : avatarPath
                }
                alt=""
                className="avatar-image"
              />
              <div className="icon-btn-wrapper">
                <IconButton
                  className="icon-button-cus"
                  onClick={handleClickOpenUploadAvata}
                >
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
              name="fisrtname"
              type="text"
              value={userInfoForm.fisrtname}
              onChange={handleChangeUserInfoForm}
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
              value={userInfoForm?.lastname}
              onChange={handleChangeUserInfoForm}
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
              value={userInfoForm?.username}
              onChange={handleChangeUserInfoForm}
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
              value={userInfoForm?.email}
              onChange={handleChangeUserInfoForm}
              disabled
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
              value={userInfoForm?.phone}
              onChange={handleChangeUserInfoForm}
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
              value={userInfoForm?.dob}
              onChange={handleChangeUserInfoForm}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <TextField
              label={"Password"}
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              value={userInfoForm?.password}
              onChange={handleChangeUserInfoForm}
              disabled
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
                onClick={handleClickSaveChanges}
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

export default Profile;
