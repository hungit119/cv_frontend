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
  .preview-none{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;
const CvPreviewSelected = () => {
  const [currentCv, setCurrentCv] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const cvSelected = useSelector((state) => state.cvReducer.cvSelected);
  const fetchCvSelected = async () => {
    try {
      await axios
        .get(`${config.API}/api/cv/getCvBySid?sid=${cvSelected}`)
        .then((response) => responseHandler(response))
        .then((response) => {
          setIsLoading(false);
          setCurrentCv(response.cv);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.response.data.message, {
            theme: "colored",
          });
        });
    } catch (error) {}
  };
  useEffect(() => {
    fetchCvSelected();
  }, [cvSelected]);
  return !isLoading && currentCv ? (
    <Div>
      <TemplateCV cv={currentCv} />
    </Div>
  ) : (
    <Div>
      <div className="preview-none">Preview CV</div>
    </Div>
  );
};

export default CvPreviewSelected;
