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
const StyledTextareaAutosizeContent = styled(StyledTextField)`
  outline: none;
  resize: none;
  border: 1px solid transparent;
  width: 100%;

  &:hover {
    outline: #77a5cc dashed 1pt;
  }
  &::placeholder {
    color: #9197a3;
    font-weight: 100;
    font-size: 14px;
  }
`;
const StyledTextAreaAutoSizeContent = ({
  value,
  fontweight,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <StyledTextareaAutosizeContent
      value={value}
      placeholder={placeholder}
      style={{ fontWeight: `${fontweight}` }}
      onChange={onChange}
      name={name}
    />
  );
};

export default StyledTextAreaAutoSizeContent;
