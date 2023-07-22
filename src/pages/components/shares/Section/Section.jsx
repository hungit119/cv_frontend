import TextareaAutosize from "@mui/base/TextareaAutosize";
import React from "react";
import styled from "styled-components";
const DivSection = styled.div``;
const Section = ({ children }) => {
  return <DivSection>{children}</DivSection>;
};

export default Section;
