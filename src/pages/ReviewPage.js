import { Box, Button, Paper, ToggleButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";
import ReviewInfoCard from "../Components/ReviewInfoCard";
import { getReview } from "../utils/api";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getReview(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <div>
      <ReviewInfoCard review={review} />
      <Paper
        sx={{
          p: 1,
          m: 3,
        }}
      >
        {review.review_body}
      </Paper>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
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
    </div>
  );
};

export default ReviewPage;
