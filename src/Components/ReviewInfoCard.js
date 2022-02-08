import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useVote } from "../hooks/CustomHooks";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ReviewInfoCard = ({ review }) => {
  var dayjs = require("dayjs");
  const date = dayjs(review.created_at);
  const dateStr = `${date.$D + 1}/${date.$M + 1}/${date.$y}`;
  const FavIcon = <FavoriteIcon />;
  const { outIcon } = useVote(
    review.votes,
    FavIcon,
    `/reviews/${review.review_id}`
  );

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          p: 1,
          m: 3,
          height: "200px",
        }}
      >
        <img
          src={review.review_img_url}
          maxwidth={500}
          height="100%"
          p={100}
          m={1}
        />
        <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              fontWeight: "bold",
              justifyContent: "space-around",
            }}
          >
            <Box p={1} m={1}>
              {review.title}
            </Box>
            <Box p={1} m={1}>
              <Link to={`/user/${review.owner}`}>by {review.owner}</Link>
            </Box>
            <Box p={1} m={1}>
              Posted: {dateStr}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
            <Box>Game designer: {review.designer}</Box>
            <Box>
              Game type:
              <Link to={`/categories/${review.category}`}>
                {` ${review.category}`}
              </Link>
            </Box>
          </Box>
        </Box>
        {outIcon}
      </Paper>
    </div>
  );
};

export default ReviewInfoCard;
