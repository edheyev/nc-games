import React from "react";
import styles from "../styles/ReviewCard.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const url = `/review/${review.review_id}`;

  return (
    <div className={styles.review_card}>
      {review.title}{" "}
      <Link to={`/review/${review.review_id}`}>
        <Button variant="outlined">Read Review</Button>
      </Link>
    </div>
  );
};

export default ReviewCard;
