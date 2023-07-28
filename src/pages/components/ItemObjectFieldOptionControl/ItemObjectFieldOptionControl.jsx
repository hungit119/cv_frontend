import React from "react";
import styled from "styled-components";
import StyledTextAreaAutoSizeContent from "../StyledTextAreaAutoSizeContent/StyledTextAreaAutoSizeContent";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const Div = styled.div`
  border-bottom: 1px dotted#77a5cc;
  position: relative;
  .btn-delete-item-control {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
  }
  &:hover {
    .btn-delete-item-control {
      display: flex;
    }
    outline: #77a5cc dashed 1pt;
  }
`;
const ItemObjectFieldOptionControl = ({
  data,
  sectionName,
  handleChangeDeleteItem,
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
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        </div>
      )}
      {Object.entries(data)
        .filter((dt) => dt[0] !== "sid")
        .map((dt) => (
          <StyledTextAreaAutoSizeContent
            value={dt[1]}
            name={dt[0]}
            placeholder={`Nhập ${dt[0]}`}
            onChange={(e) => onChange(data.sid, e, sectionName)}
          />
        ))}
    </Div>
  );
};

export default ItemObjectFieldOptionControl;
