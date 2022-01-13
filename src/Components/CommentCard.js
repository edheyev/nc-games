import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CommentCard.module.css";
import { deleteComment } from "../utils/api";

const CommentCard = ({ comment, myComment, setUpdateComments }) => {
  var dayjs = require("dayjs");
  const date = dayjs(comment.created_at);
  const dateStr = `${date.$D + 1}/${date.$M + 1}/${date.$y}`;

  const handleDeleteComment = () => {
    deleteComment(comment.comment_id)
      .then((res) => setUpdateComments(comment.comment_id))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box sx={{ p: 1, m: 1 }}>
      <Paper sx={{ p: 1 }}>
        <div>{comment.body}</div>
        <Box sx={{ m: 1, display: "flex", justifyContent: "space-between" }}>
          {comment.author === "Anonymous" ? (
            <Typography variant="body">Anonymous</Typography>
          ) : (
            <Link to={`/user/${comment.author}`}>{comment.author}</Link>
          )}
          {dateStr}
          {comment.votes}
          {myComment && <Button onClick={handleDeleteComment}>DELETE</Button>}
        </Box>
      </Paper>
    </Box>
  );
};

export default CommentCard;
