import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";
import { getReview } from "../utils/api";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReview(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <div>
      REVIEW INFO CARD{review.title}{" "}
      <div>REVIEW CONTENT {review.review_body}</div>
      <div>
        COMMENTS BEHIND TOGGLE
        <CommentSection
          review_id={review_id}
          totalComments={review.comment_count}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
