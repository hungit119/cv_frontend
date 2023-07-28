import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import config from "../../config";
import { responseHandler } from "../../services/responseHandler";
import styled from "styled-components";
import { Box, CircularProgress } from "@mui/material";
import CvHomeCard from "../components/CvHomeCard/CvHomeCard";
import { useDispatch, useSelector } from "react-redux";
import { setCvs } from "../../features/CvSlice";
const Div = styled.div``;
const HomePage = () => {
  const dispatch = useDispatch();
  const cvs = useSelector((state) => state.cvReducer.cvs);
  const [isFetch, setIsFetch] = useState(true);
  const fetchAllCv = async () => {
    try {
      await axios
        .get(`${config.API}/api/cv/getAllCv`)
        .then((response) => responseHandler(response))
        .then((response) => {
          dispatch(setCvs(response.cvs));
          setIsFetch(false);
        });
    } catch (error) {}
  };
  useEffect(() => {
    fetchAllCv();
  }, []);
  return (
    <Div>
      {isFetch && !cvs ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Container fluid className="p-4">
          <Row>
            {cvs.map((cv) => (
              <Col lg={6}>
                <CvHomeCard cv={cv} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Div>
  );
};

export default HomePage;
