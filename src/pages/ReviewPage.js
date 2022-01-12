import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReview } from "../utils/api";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getReview(review_id).then((review) => {
      setReview(review);
      console.log(review);
    });
  }, [review_id]);

  return (
    <div>
      REVIEW INFO CARD{review.title}{" "}
      <div>REVIEW CONTENT {review.review_body}</div>
      <div>COMMENTS BEHIND TOGGLE</div>
    </div>
  );
};

export default ReviewPage;
