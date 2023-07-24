import axios from "axios";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import Template1 from "../Template1/Template1";
import styles from "./FormCV.scss";
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
          toast.success(response.message, {
            theme: "colored",
          });
          setOpen(false);
        });
    } catch (error) {
      toast.error(error.response.data.message, {
        theme: "colored",
      });
      setOpen(false);
    }
  };
  return (
    <div className={cx("wrapper")}>
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
