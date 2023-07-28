import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styled from "styled-components";
const StyledTextField = styled(TextareaAutosize)`
  &:hover {
    outline: #77a5cc dashed 1pt;
  }
  border: 1px solid transparent;
  resize: none;
`;
const StyledTextareaAutosizeHeader = styled(StyledTextField)`
  outline: none;
  resize: none;
  border: 1px solid transparent;
  width: 100%;
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    outline: #77a5cc dashed 1pt;
  }
`;
const StyledTextAreaAutoSizeHeader = ({ value, color }) => {
  return (
    <StyledTextareaAutosizeHeader value={value} style={{ color: color }} />
  );
};

export default StyledTextAreaAutoSizeHeader;
