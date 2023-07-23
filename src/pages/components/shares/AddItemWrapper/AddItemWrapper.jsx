import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Button } from "@mui/material";
import styled from "styled-components";
const Div = styled.div`
  position: relative;
  .btn-add-item-section {
    display: none;
    position: absolute;
    top: -10;
    right: 0;
  }
  &:hover {
    outline: red dashed 1pt;
    .btn-add-item-section {
      display: flex;
    }
  }
`;
const AddItemWrapper = ({ children, title, handleAddSectionItem }) => {
  return (
    <Div>
      <Button
        className="btn-add-item-section"
        variant="contained"
        color="success"
        startIcon={<AddCircleOutlineRoundedIcon />}
        size="small"
        style={{ fontWeight: 600 }}
        onClick={handleAddSectionItem}
      >
        Thêm {title}
      </Button>
      {children}
    </Div>
  );
};

export default AddItemWrapper;
