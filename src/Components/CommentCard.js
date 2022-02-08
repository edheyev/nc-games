import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useVote } from "../hooks/CustomHooks";
import styles from "../styles/CommentCard.module.css";
import { deleteComment } from "../utils/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const CommentCard = ({ comment, myComment, setUpdateComments }) => {
  var dayjs = require("dayjs");
  const date = dayjs(comment.created_at);
  const dateStr = `${date.$D + 1}/${date.$M + 1}/${date.$y}`;

  const handleDeleteComment = () => {
    deleteComment(comment.comment_id)
      .then((res) => setUpdateComments(comment.comment_id))
      .catch((err) => {});
  };

  const upIcon = <ThumbUpIcon />;
  const { outIcon } = useVote(
    comment.votes,
    upIcon,
    `/comments/${comment.comment_id}`
  );

  return (
    <Box sx={{ p: 1, m: 1 }}>
      <Paper sx={{ p: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {outIcon}
          <div>{comment.body}</div>
        </Box>
        <Box sx={{ m: 1, display: "flex", justifyContent: "space-between" }}>
          {comment.author === "Anonymous" ? (
            <Typography variant="body">Anonymous</Typography>
          ) : (
            <Link to={`/user/${comment.author}`}>{comment.author}</Link>
          )}
          {myComment && <Button onClick={handleDeleteComment}>DELETE</Button>}
          {dateStr}
        </Box>
      </Paper>
    </Box>
  );
};

export default CommentCard;
