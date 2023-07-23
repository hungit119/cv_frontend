import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FontDownloadRoundedIcon from "@mui/icons-material/FontDownloadRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PhotoRoundedIcon from "@mui/icons-material/PhotoRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Template1 from "../Template1/Template1";
import TippyHeadLess from "../TippyHeadless/TippyHeadless";
import styles from "./FormCV.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
const cx = classNames.bind(styles);
const Div = styled.div`
  position: fixed;
  top: 80;
  left: 0;
  z-index: 10000;
  display: none;
  .icon-wrapper-setting {
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
    z-index: 20000;
  }
  .setting-tools {
    padding-left: 41px;
    display: flex;
    align-items: center;
  }
  &:hover {
    .setting-tools {
      width: 180px;
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const DivSetting = styled.div`
  width: 37px;
  overflow: hidden;
  height: 40px;
  background-color: white;
  position: fixed;
  top: 91px;
  left: 10px;
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  .setting-tools-wrapper {
    margin-left: 10px;
  }
`;
const FormCV = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(true);
  const [form, setform] = useState({});
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  const email = useSelector((state) => state.userReducer.user.email);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickSaveCv = async () => {
    try {
      await axios
        .post(`${config.API}/api/cv/createCv`, {
          ...form,
        })
        .then((response) => responseHandler(response))
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      setOpen(false);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Lưu CV"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn lưu lại cv này ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickSaveCv} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Div>
        <DivSetting className="setting-tools">
          <div className="setting-tools-wrapper">
            <ColorLensIcon style={{ color: "#19243B", marginRight: "5px" }} />
            <FontDownloadRoundedIcon
              style={{ color: "#19243B", marginRight: "5px" }}
            />
            <DownloadRoundedIcon
              style={{ color: "#19243B", marginRight: "5px" }}
            />
            <ManageAccountsRoundedIcon
              style={{ color: "#19243B", marginRight: "5px" }}
            />
          </div>
        </DivSetting>
        <IconButton
          aria-label="delete"
          size="large"
          className={cx("icon-setting-tool-top")}
        >
          <div className="icon-wrapper-setting">
            <SettingsIcon fontSize="inherit" style={{ color: " #19243b;" }} />
          </div>
        </IconButton>
      </Div>
      <div className={cx("top-tool")}>
        <div className={cx("toolbar")}>
          <div className={cx("toolbar-left")}>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PhotoRoundedIcon />
                  </span>
                  <p>Màu sắc</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <AutoAwesomeMotionRoundedIcon />
                  </span>
                  <p>Mẫu CV</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <PersonRoundedIcon />
                  </span>
                  <p>Ảnh hồ sơ</p>
                </div>
              </TippyHeadLess>
            </div>
            <div className={cx("toolbar-item")}>
              <div className={cx("toolbar-item-child")}>
                <button className={cx("btn-download")}>
                  <span>
                    <ArrowDownwardRoundedIcon />
                  </span>
                  <p>Tải Xuống</p>
                </button>
              </div>
            </div>
            <div className={cx("toolbar-item")} onClick={handleClickOpen}>
              <div className={cx("toolbar-item-child")}>
                <span>
                  <SaveRoundedIcon />
                </span>
                <p>Lưu CV</p>
              </div>
            </div>
            <div className={cx("toolbar-item")}>
              <TippyHeadLess menuTippy={<h1>Hello</h1>}>
                <div className={cx("toolbar-item-child")}>
                  <span>
                    <ManageAccountsRoundedIcon />
                  </span>
                  <p>Quản lí CV</p>
                </div>
              </TippyHeadLess>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("editor")}>
        <div className={cx("cv")}>
          <div className={cx("form-cv")}>
            {!isLoading ? (
              <Template1 setformValue={setform} email={email} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCV;
