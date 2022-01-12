import { Button } from "@mui/material";
import React from "react";
import styles from "../styles/CommentCard.module.css";
import { deleteComment } from "../utils/api";

const CommentCard = ({ comment, myComment, setUpdateComments }) => {
  const handleDeleteComment = () => {
    deleteComment(comment.comment_id)
      .then((res) => setUpdateComments(comment.comment_id))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.com_card}>
      <div>{comment.body}</div>
      <div>
        {comment.author}
        {comment.created_at}
        {comment.votes}
        {myComment && <Button onClick={handleDeleteComment}>DELETE</Button>}
      </div>
    </div>
  );
};

export default CommentCard;
