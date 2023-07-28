import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import { toast } from "react-toastify";
import TemplateCV from "../TemplateCV/TemplateCV";
const Div = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 24px;
  min-height: 587px;
  .preview-none {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;
const CvHomeCard = ({ cv }) => {
  const [currentCv, setCurrentCv] = useState(cv);
  return (
    <Div>
      <TemplateCV cv={currentCv} />
    </Div>
  );
};

export default CvHomeCard;
