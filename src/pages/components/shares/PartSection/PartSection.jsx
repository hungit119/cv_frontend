import React from "react";
import styled from "styled-components";
import StyledTextAreaAutoSizeContent from "../../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
const Div = styled.div`
  margin-top: 10px;
  padding: 4px;
  border: 1px dotted transparent;
  position: relative;
  border-bottom: 1px dotted#77a5cc;
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
    outline: #77a5cc dashed 1pt;
    border: 1px dotted #ccc;
  }
`;
const PartSection = ({
  data,
  onChange,
  sectionName,
  handleChangeDeleteItem,
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
          onClick={() => handleChangeDeleteItem(data.sid, sectionName)}
        >
          <DeleteRoundedIcon />
        </IconButton>
      )}
      <StyledTextAreaAutoSizeContent
        fontweight={500}
        placeholder={"Thời gian làm việc"}
        value={data.studyTime}
        name={Object.keys(data).find((key) => data[key] === data.studyTime)}
        onChange={(e) => onChange(data.sid, e)}
      />
      <StyledTextAreaAutoSizeContent
        fontweight={500}
        placeholder={"Tên công ty/ trường học"}
        value={data.companyName}
        name={Object.keys(data).find((key) => data[key] === data.companyName)}
        onChange={(e) => onChange(data.sid, e)}
      />
      <StyledTextAreaAutoSizeContent
        fontweight={500}
        placeholder={"Vị trí công việc"}
        value={data.position}
        name={Object.keys(data).find((key) => data[key] === data.position)}
        onChange={(e) => onChange(data.sid, e)}
      />
      <StyledTextAreaAutoSizeContent
        placeholder={"Mô tả chi tiết công việc"}
        value={data.content}
        name={Object.keys(data).find((key) => data[key] === data.content)}
        onChange={(e) => onChange(data.sid, e)}
      />
    </Div>
  );
};

export default PartSection;
