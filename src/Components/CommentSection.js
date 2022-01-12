import { Button, TextField } from "@mui/material";
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
      author: user.user,
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
      COMMENT Section
      <div>
        <div>
          {isLoggedIn ? (
            <TextField id="newComment">NEW COMMENT</TextField>
          ) : (
            <Link to="/login">Login to comment</Link>
          )}
          <Button variant="contained" onClick={handleNewComment}>
            Comment
          </Button>
        </div>
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
