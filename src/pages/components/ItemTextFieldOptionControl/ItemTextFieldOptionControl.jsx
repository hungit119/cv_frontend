import React from "react";
import StyledTextAreaAutoSizeContent from "../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { IconButton } from "@mui/material";
const Div = styled.div`
  position: relative;
  border-bottom: 1px dotted#77a5cc;
  .btn-delete-item-control {
    display: none;
    position: absolute;
    right: 0;
    top: -5px;
  }
  &:hover {
    .btn-delete-item-control {
      display: flex;
    }
    outline: #77a5cc dashed 1pt;
  }
`;
const ItemTextFieldOptionControl = ({
  data,
  placeholder,
  handleChangeDeleteItem,
  sectionName,
  onChange,
  readOnly,
}) => {
  return (
    <Div>
      {readOnly ? (
        <></>
      ) : (
        <div
          className="btn-delete-item-control"
          onClick={() => handleChangeDeleteItem(data.sid, sectionName)}
        >
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      <StyledTextAreaAutoSizeContent
        value={data.name}
        placeholder={placeholder}
        name={"name"}
        onChange={(e) => onChange(data.sid, e, sectionName)}
      />
    </Div>
  );
};

export default ItemTextFieldOptionControl;
