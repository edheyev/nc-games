import React from "react";
import styles from "../styles/ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return <div className={styles.review_card}>{review.title}</div>;
};

export default ReviewCard;
