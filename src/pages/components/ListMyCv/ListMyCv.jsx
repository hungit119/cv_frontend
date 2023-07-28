import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import config from "../../../config";
import { responseHandler } from "../../../services/responseHandler";
import CvPreviewSelected from "../CvPreviewSelected/CvPreviewSelected";
import ListCv from "../ListCv/ListCv";
import { Pagination } from "@mui/material";
const Div = styled.div`
  padding: 24px 12px;
  button {
    color: white;
  }
  .pagenition-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ListMyCv = ({ itemsPerPage = 4 }) => {
  const [page, setPage] = React.useState(1);
  const [cvs, setCvs] = useState([]);
  const [isLoadingCvs, setIsLoadingCvs] = useState(true);
  const indexOfLast = page * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = cvs.slice(indexOfFirst, indexOfLast);
  const pageCount = Math.ceil(cvs.length / itemsPerPage);

  const sid = useSelector((state) => state.userReducer.user.sid);
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
  const handleChange = (event, value) => {
    setPage(value);
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
            <ListCv cvs={currentItems} isLoadingCvs={isLoadingCvs} />
            <div className="pagenition-list">
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default ListMyCv;
