import React, { useState, useEffect } from "react";
import { getReviews } from "../utils/api";

export const useReviews = (
  totalReviews,
  setTotalReviews,
  category,
  currentPage,
  currentDisplayLimit,
  sortQuery,
  sortDir,
  setIsLoading,
  setIsError
) => {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getReviews(category, currentPage, currentDisplayLimit, sortQuery, sortDir)
      .then((reviewsFromApi) => {
        setIsLoading(false);
        setReviewList(reviewsFromApi.reviews);
        setTotalReviews(reviewsFromApi.totalCount);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err.message);
      });
  }, [category, currentPage, currentDisplayLimit, sortQuery, sortDir]);

  return { reviewList, setReviewList };
};
