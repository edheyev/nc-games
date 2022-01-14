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
import { useLoading, usePagination } from "../hooks/CustomHooks";
import { Box, Typography } from "@mui/material";

const ReviewsPage = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [sortQuery, setSortQuery] = useState("date");
  const [sortDir, setSortDir] = useState("ASC");
  const [totalReviews, setTotalReviews] = useState(0);
  const { searchStr } = useParams();
  const { loadComponent, setIsLoading, setIsError } = useLoading();

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
    sortDir,
    setIsLoading,
    setIsError
  );

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((catsFromApi) => {
        setIsLoading(false);
        setCategoryList(catsFromApi);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    if (searchStr) {
      console.log(searchStr);
      //TODO
      // filterReviews(reviewList, searchStr, setReviewList);
    }
  }, [searchStr, reviewList, setReviewList]);

  return (
    <div>
      <FilterAndSearch
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
        sortDir={sortDir}
        setSortDir={setSortDir}
        categoryList={categoryList}
      />

      {category && <h1>{category}</h1>}
      <Box textAlign="center">
        {loadComponent}
        <Link to="/review/new">
          {searchStr ? (
            <Typography variant="h3">{searchStr}</Typography>
          ) : (
            <Button variant="contained">Submit new review!</Button>
          )}
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
