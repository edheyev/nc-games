import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = ({ categoryList }) => {
  return (
    <div>
      Category:
      <Link to={`/reviews`}>All</Link>
      {categoryList.map((category) => {
        return (
          <Link to={`/categories/${category.slug}`} key={category.slug}>
            {category.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
