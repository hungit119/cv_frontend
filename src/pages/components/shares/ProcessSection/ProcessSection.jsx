import { IconButton } from "@mui/material";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Button } from "@mui/material";
import TextFieldCus from "../TextFieldCus/TextFieldCus";
const Div = styled.div`
  position: relative;
  .header-section {
    font-size: 15px;
    font-weight: 600;
  }
  .icon-delete-section-item {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    color: red;
  }
  .btn-control-value {
    display: none;
    position: absolute;
    top: 48px;
  }
  &:hover {
    .icon-delete-section-item {
      display: block;
    }
    .btn-control-value {
      display: block;
    }
    outline: #77a5cc dashed 1pt;
  }
`;
const ProcessSection = ({
  section,
  value,
  handleChangeProcessPlus,
  handleChangeProcessSub,
  sid,
  handleChangeDeleteItem,
  sectionName,
  onChange,
  name,
  readOnly,
}) => {
  return (
    <Div>
      {readOnly ? (
        <></>
      ) : (
        <IconButton
          className="icon-delete-section-item"
          aria-label="delete"
          onClick={() => handleChangeDeleteItem(sid, sectionName)}
        >
          <DeleteRoundedIcon />
        </IconButton>
      )}
      <div className="header-section">
        <TextFieldCus
          value={section}
          fontweight={500}
          onChange={(e) => onChange(sid, e)}
          name={name}
          width={100}
          placeholder={"Nhập tên kỹ năng"}
        />
      </div>
      {readOnly ? (
        <></>
      ) : (
        <div className="btn-control-value">
          <IconButton
            aria-label="delete"
            onClick={() => handleChangeProcessSub(sid)}
          >
            <RemoveRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleChangeProcessPlus(sid)}
          >
            <AddRoundedIcon />
          </IconButton>
        </div>
      )}
      <ProgressBar now={value} label={`${value}%`} />
      <br />
    </Div>
  );
};

export default ProcessSection;
