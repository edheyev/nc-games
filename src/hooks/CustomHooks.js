import { Badge } from "@material-ui/core";
import { Box, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import BasicPagination from "../Components/BasicPagination";
import PagMenu from "../Components/PagMenu";
import { patchVotes } from "../utils/api";

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

export const useVote = (initVotes, icon, apiPath) => {
  const [votes, setVotes] = useState(initVotes);

  useEffect(() => {
    setVotes(initVotes);
  }, [initVotes]);

  const handleVote = () => {
    setVotes((prev) => {
      return prev + 1;
    });
    patchVotes(apiPath, 1).catch((err) => {
      console.log(err);
    });
  };

  const outIcon = (
    <IconButton sx={{ p: 1, m: 1 }} aria-label="cart" onClick={handleVote}>
      <Badge badgeContent={votes} color="secondary">
        {icon}
      </Badge>
    </IconButton>
  );

  return { outIcon };
};
