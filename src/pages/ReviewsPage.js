import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import BasicPagination from "../Components/BasicPagination";
// import PagMenu from "../Components/PagMenu";
import ReviewCard from "../Components/ReviewCard";
// import ReviewCardContainer from "../Components/ReviewCardContainer";
import styles from "../styles/ReviewsPage.module.css";
import { getCategories } from "../utils/api";
import FilterAndSearch from "../Components/FilterAndSearch";
import { filterReviews } from "../utils/utils";
import Button from "@material-ui/core/Button";
import { useReviews } from "../hooks/ApiHooks";
import { usePagination } from "../hooks/CustomHooks";
import { Box } from "@mui/material";

const ReviewsPage = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  // const [reviewList, setReviewList] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [currentDisplayLimit, setCurrentDisplayLimit] = useState(10);
  const [sortQuery, setSortQuery] = useState("date");
  const [sortDir, setSortDir] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalReviews, setTotalReviews] = useState(0);

  const {
    Pagination,
    currentPage,
    setCurrentPage,
    currentDisplayLimit,
    setCurrentDisplayLimit,
  } = usePagination(totalReviews);

  const { reviewList, setReviewList } = useReviews(
    totalReviews,
    setTotalReviews,
    category,
    currentPage,
    currentDisplayLimit,
    sortQuery,
    sortDir
  );

  useEffect(() => {
    getCategories()
      .then((catsFromApi) => {
        setCategoryList(catsFromApi);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm);
      //TODO
      filterReviews(reviewList, searchTerm, setReviewList);
    }
  }, [searchTerm, reviewList, setReviewList]);

  return (
    <div>
      <FilterAndSearch
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
        sortDir={sortDir}
        setSortDir={setSortDir}
        categoryList={categoryList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {category && <h1>{category}</h1>}
      <Box textAlign="center">
        <Link to="/review/new">
          <Button float="centerm" variant="contained">
            Submit new review!
          </Button>
        </Link>
        {reviewList.map((review, i) => {
          return <ReviewCard review={review} key={i} />;
        })}
      </Box>
      {Pagination}
    </div>
  );
};

export default ReviewsPage;
/*
TODO 

- search bar?
-loading 
-error handling

-- cards 
sort look out

----styling

*/
