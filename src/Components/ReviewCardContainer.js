import React, { useState, useEffect } from "react";
import { getCategories } from "../utils/api";
import ReviewCard from "./ReviewCard";
import SortSearch from "./SortSearch";

const ReviewCardContainer = () => {
  return (
    <div>
      RC Container
      <SortSearch />
      <button>SUBMIT REVIEW</button>
      <ReviewCard />
    </div>
  );
};

export default ReviewCardContainer;
