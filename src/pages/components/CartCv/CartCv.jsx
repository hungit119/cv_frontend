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
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCvSelected } from "../../../features/CvSlice";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import { toast } from "react-toastify";
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
  .delete-icon-card {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
  .download-icon-card {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .content-card {
    padding: 10px;
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
  .wrapper-image-card {
    border-radius: 50%;
    padding: 4px;
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
const CartCv = ({ cv, cvPreviewed }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteCv = async () => {
    try {
      setIsDeleting(true);
      await axios
        .delete(`${config.API}/api/cv/delete?sid=${cv.sid}`)
        .then((response) => responseHandler(response))
        .then((response) => {
          window.location.reload();
          toast.success(response.message);
          setIsDeleting(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Div
      style={{
        backgroundColor: cv.sid === cvPreviewed ? "rgb(56, 184, 242)" : "",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có chắc chắn muốn xóa cv này?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteCv} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <div className="delete-icon-card">
        <Button variant="contained" color="error" onClick={handleClickOpen}>
          <DeleteRoundedIcon />
        </Button>
      </div>
      <div className="content-card">
        <div className="avatar-cart">
          <span
            className="wrapper-image-card"
            style={{
              border: `2px solid ${cv.cvInfo.color}`,
            }}
          >
            <img
              src={cv.userInfo.avatar}
              alt=""
              className="avatar-cart-image"
            />
          </span>
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
                  backgroundColor: " rgb(115, 82, 199)",
                  marginBottom: "4px",
                }}
                onClick={() => {
                  dispatch(setCvSelected(cv.sid));
                }}
              >
                PREVIEW
              </Button>
            </Col>
            <Col lg={6} md={6}>
              <a href={`/edit-cv?sid=${cv.sid}`}>
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
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Div>
  );
};

export default CartCv;
