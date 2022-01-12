import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = ({ setCurrentPage, totalPages }) => {
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handlePageChange}
        count={totalPages}
        color="primary"
      />
    </Stack>
  );
};

export default BasicPagination;
