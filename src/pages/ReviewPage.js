import { Box, Button, Paper, ToggleButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";
import ReviewInfoCard from "../Components/ReviewInfoCard";
import { getReview } from "../utils/api";
import { useLoading, usePagination } from "../hooks/CustomHooks";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { loadComponent, setIsLoading, setIsError, isError, isLoading } =
    useLoading();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [review_id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loadComponent}
      {!isError && !isLoading ? (
        <>
          <ReviewInfoCard review={review} />
          <Paper
            sx={{
              p: 1,
              m: 3,
              maxWidth: "75%",
            }}
          >
            {review.review_body}
          </Paper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              m: 1,
            }}
          >
            <ToggleButton
              sx={{
                p: 1,
                m: 3,
              }}
              value="check"
              selected={isOpen}
              onChange={toggleOpen}
            >
              {isOpen ? "Hide comments" : "Show comments"}
            </ToggleButton>
            {isOpen && (
              <CommentSection
                review_id={review_id}
                totalComments={review.comment_count}
              />
            )}
          </Box>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewPage;
