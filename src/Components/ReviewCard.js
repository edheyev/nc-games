import React from "react";
import styles from "../styles/ReviewCard.module.css";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const url = `/review/${review.review_id}`;

  const ReviewLink = (props) => {
    return <NavLink to={`/review/${review.review_id}`} {...props} />;
  };

  return (
    <div className={styles.review_card}>
      {review.title}{" "}
      <Button variant="outlined" component={ReviewLink}>
        Read Review
      </Button>
    </div>
  );
};

export default ReviewCard;
