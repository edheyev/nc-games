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
    <div>
      <BasicPagination
        setCurrentPage={setCurrentPage}
        totalPages={calcNumPages()}
      />
      <PagMenu
        setCurrentDisplayLimit={setCurrentDisplayLimit}
        currentDisplayLimit={currentDisplayLimit}
      />
    </div>
  );

  return {
    Pagination,
    currentPage,
    setCurrentPage,
    currentDisplayLimit,
    setCurrentDisplayLimit,
  };
};
