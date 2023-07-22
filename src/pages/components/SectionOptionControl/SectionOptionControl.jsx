import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import styled from "styled-components";
import { Button } from "@mui/material";
const Div = styled.div`
  position: relative;
  .btn-control-section {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
  }
  &:hover {
    .btn-control-section {
      display: flex;
    }
    outline: #77a5cc dashed 1pt;
  }
`;
const SectionOptionControl = ({
  children,
  handleAddItemSection,
  placeholder,
}) => {
  return (
    <Div>
      <Button
        className="btn-control-section"
        variant="contained"
        size="small"
        color="success"
        startIcon={<AddCircleOutlineRoundedIcon style={{ fontSize: "20" }} />}
        onClick={handleAddItemSection}
      >
        Thêm
      </Button>
      <div>{children}</div>
    </Div>
  );
};

export default SectionOptionControl;
