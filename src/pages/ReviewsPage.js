import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BasicPagination from "../Components/BasicPagination";
import PagMenu from "../Components/PagMenu";
import CategoryFilter from "../Components/CategoryFilter";
import ReviewCard from "../Components/ReviewCard";
import ReviewCardContainer from "../Components/ReviewCardContainer";
import styles from "../styles/ReviewsPage.module.css";
import { getCategories, getReviews } from "../utils/api";
import FilterAndSearch from "../Components/FilterAndSearch";
import { filterReviews } from "../utils/utils";
import Button from "@material-ui/core/Button";

const ReviewsPage = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDisplayLimit, setCurrentDisplayLimit] = useState(10);
  const [totalReviews, setTotalReviews] = useState(0);
  const [sortQuery, setSortQuery] = useState("date");
  const [sortDir, setSortDir] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getCategories()
      .then((catsFromApi) => {
        setCategoryList(catsFromApi);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getReviews(category, currentPage, currentDisplayLimit, sortQuery, sortDir)
      .then((reviewsFromApi) => {
        setReviewList(reviewsFromApi.reviews);
        setTotalReviews(reviewsFromApi.totalCount);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category, currentPage, currentDisplayLimit, sortQuery, sortDir]);

  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm);
      //TODO
      filterReviews(reviewList, searchTerm, setReviewList);
    }
  }, [searchTerm]);

  //maybe move into pag component
  const calcNumPages = () => {
    return Math.ceil(totalReviews / currentDisplayLimit);
  };

  const newReviewLink = (props) => {
    return <Link to="/review/new" {...props} />;
  };

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

      <div className={styles.review_container}>
        <Button variant="contained" component={newReviewLink}>
          Submit new review!
        </Button>
        {reviewList.map((review, i) => {
          return <ReviewCard review={review} key={i} />;
        })}
      </div>
      <div>
        <BasicPagination
          setCurrentPage={setCurrentPage}
          totalPages={calcNumPages()}
        />
        <PagMenu
          setCurrentDisplayLimit={setCurrentDisplayLimit}
          currentDisplayLimit={currentDisplayLimit}
        />
      </div>
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
