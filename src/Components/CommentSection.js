import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getComments, postComment } from "../utils/api";
import CommentCard from "./CommentCard";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import { usePagination } from "../hooks/CustomHooks";

const CommentSection = ({ review_id, commentCount }) => {
  const [comments, setComments] = useState([]);
  const { isLoggedIn, user } = useContext(UserContext);
  const [updateComments, setUpdateComments] = useState(0);
  const [totalComments, setTotalComments] = useState(commentCount);

  const {
    Pagination,
    currentPage,
    setCurrentPage,
    currentDisplayLimit,
    setCurrentDisplayLimit,
  } = usePagination(totalComments);

  useEffect(() => {
    getComments(review_id, currentPage, currentDisplayLimit).then(
      (commentFromApi) => {
        setComments(commentFromApi);
      }
    );
  }, [updateComments, review_id]);

  const handleNewComment = (event) => {
    let newComment = {
      author: isLoggedIn ? user.user : "Anonymous",
      body: document.getElementById("newComment").value,
    };
    setComments((comments) => {
      const newComments = [newComment, ...comments];
      return newComments;
    });
    postComment(review_id, {
      username: newComment.author,
      body: newComment.body,
    })
      .then((res) => {
        console.log("posted and ,", res);
        setUpdateComments(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
          {isLoggedIn ? (
            <Box>
              <TextField sx={{ width: "85%" }} id="newComment">
                NEW COMMENT
              </TextField>
              <Button variant="contained" onClick={handleNewComment}>
                Post Comment
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
              <div>
                <Link to="/login">Login to comment as user</Link>
              </div>
              <Box sx={{ display: "flex", flexDirection: "row", p: 1, m: 1 }}>
                <TextField sx={{ width: "85%" }} id="newComment"></TextField>
                <Button
                  sx={{ height: "100%", marginLeft: 1 }}
                  variant="contained"
                  onClick={handleNewComment}
                >
                  Post Comment
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        {comments.map((comment, i) => {
          return (
            <CommentCard
              key={i}
              comment={comment}
              myComment={comment.author === user.user}
              setUpdateComments={setUpdateComments}
            />
          );
        })}
      </div>
      {comments.length > 10 ? Pagination : <></>}
    </div>
  );
};

export default CommentSection;
