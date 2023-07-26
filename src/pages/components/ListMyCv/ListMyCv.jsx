import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import config from "../../../config";
import { useSelector } from "react-redux";
import { responseHandler } from "../../../services/responseHandler";
import { Col, Container, Row } from "react-bootstrap";
import ListCv from "../ListCv/ListCv";
import CvPreviewSelected from "../CvPreviewSelected/CvPreviewSelected";
const Div = styled.div`
  padding: 24px 12px;
`;
const ListMyCv = () => {
  const [cvs, setCvs] = useState([]);
  const [isLoadingCvs, setIsLoadingCvs] = useState(true);
  const sid = useSelector((state) => state.userReducer.user.sid);
  console.log(cvs);
  const fetchCvs = async () => {
    try {
      await axios
        .get(`${config.API}/api/cv/getAllByUserId?sid=${sid}`)
        .then((response) => responseHandler(response))
        .then((response) => {
          setCvs(response.cvs);
          setIsLoadingCvs(false);
        });
    } catch (error) {
      setIsLoadingCvs(false);
      toast.error(error.response.data.message, {
        theme: "colored",
      });
    }
  };
  useEffect(() => {
    fetchCvs();
  }, []);
  return (
    <Div>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <CvPreviewSelected />
          </Col>
          <Col lg={6}>
            <ListCv cvs={cvs} isLoadingCvs={isLoadingCvs} />
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default ListMyCv;
