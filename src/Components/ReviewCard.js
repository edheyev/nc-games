import React from "react";
import styles from "../styles/ReviewCard.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const ReviewCard = ({ review }) => {
  const url = `/review/${review.review_id}`;

  return (
    <Card sx={{ maxHeight: 300, p: 1, m: 1 }}>
      <Badge sx={{ float: "right" }} badgeContent={review.votes}>
        <FavoriteIcon />
      </Badge>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1, m: 1 }}>
        <Box
          sx={{ display: "flex", order: 2, justifyContent: "space-between" }}
        >
          <Link to={`/user/${review.owner}`}>{review.owner}</Link>
          <Typography float={"right"} variant="body">
            {review.comment_count} people are talking about this
          </Typography>
        </Box>
        <Box sx={{ order: 1 }}>
          <Link to={`/review/${review.review_id}`}>
            <CardActionArea>
              <Typography variant="h5">{review.title}</Typography>
              <CardMedia
                component="img"
                height="140"
                image={review.review_img_url}
                alt="green iguana"
              />
            </CardActionArea>
          </Link>
        </Box>
        {/* <Button variant="outlined">Read Review</Button> */}
      </Box>
    </Card>
  );
};

export default ReviewCard;
