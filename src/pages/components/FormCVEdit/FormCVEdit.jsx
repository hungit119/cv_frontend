import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import config from "../../../config";
import { useSearchParams } from "react-router-dom";
import { responseHandler } from "../../../services/responseHandler";
import Template1 from "../Template1/Template1";
import styles from "./FormCVEdit.scss";
import Template1Update from "../Template1Update/Template1Update";
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
const FormCVEdit = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(true);
  const [isFetching, setisFetching] = useState(false);
  const [searchParams] = useSearchParams();
  const [cving, setCving] = useState({});
  const [form, setform] = useState({});
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  const email = useSelector((state) => state.userReducer.user.email);
  const sid = useSelector((state) => state.userReducer.user.sid);
  const fetchCvInfo = async () => {
    try {
      setisFetching(true);
      await axios
        .get(`${config.API}/api/cv/getCvBySid?sid=${searchParams.get("sid")}`)
        .then((response) => responseHandler(response))
        .then((response) => {
          setCving(response.cv);
          setisFetching(false);
        });
    } catch (error) {}
  };
  useEffect(() => {
    fetchCvInfo();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("editor")}>
        <div className={cx("cv")}>
          <div className={cx("form-cv")}>
            {!isLoading && !isFetching ? (
              <Template1Update
                setformValue={setform}
                cv={cving}
                email={email}
                sid={sid}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCVEdit;
