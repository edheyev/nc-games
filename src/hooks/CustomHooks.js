import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import BasicPagination from "../Components/BasicPagination";
import PagMenu from "../Components/PagMenu";

export const usePagination = (totalReviews) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDisplayLimit, setCurrentDisplayLimit] = useState(10);

  const calcNumPages = () => {
    return Math.ceil(totalReviews / currentDisplayLimit);
  };

  const Pagination = (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <BasicPagination
        setCurrentPage={setCurrentPage}
        totalPages={calcNumPages()}
      />
      <PagMenu
        setCurrentDisplayLimit={setCurrentDisplayLimit}
        currentDisplayLimit={currentDisplayLimit}
      />
    </Box>
  );

  return {
    Pagination,
    currentPage,
    setCurrentPage,
    currentDisplayLimit,
    setCurrentDisplayLimit,
  };
};

export const useVote = () => {};
