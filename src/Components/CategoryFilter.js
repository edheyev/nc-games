import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ categoryList }) => {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      Category:
      <Link to={`/reviews`}>All</Link>
      {categoryList.map((category) => {
        return (
          <Link
            sx={{ m: 1, p: 1 }}
            to={`/categories/${category.slug}`}
            key={category.slug}
          >
            <Typography sx={{ m: 1, p: 1 }} variant="body">
              {category.slug}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

export default CategoryFilter;
