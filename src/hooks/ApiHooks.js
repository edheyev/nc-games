import React, { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
export const useReviews = (
  category,
  currentPage,
  currentDisplayLimit,
  sortQuery,
  sortDir
) => {
  const [reviewList, setReviewList] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => {
    getReviews(category, currentPage, currentDisplayLimit, sortQuery, sortDir)
      .then((reviewsFromApi) => {
        setReviewList(reviewsFromApi.reviews);
        setTotalReviews(reviewsFromApi.totalCount);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category, currentPage, currentDisplayLimit, sortQuery, sortDir]);

  return { reviewList, setReviewList, totalReviews, setTotalReviews };
};
