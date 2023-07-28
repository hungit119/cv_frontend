import { Pagination, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: center;
  button {
    color: white;
  }
`;
const DefautPagenition = ({ count }) => {
  return (
    <Div>
      <Stack spacing={2}>
        <Pagination
          count={count}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Div>
  );
};

export default DefautPagenition;
