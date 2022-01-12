import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BasicPagination from "../Components/BasicPagination";
import PagMenu from "../Components/PagMenu";
import ReviewCard from "../Components/ReviewCard";
// import ReviewCardContainer from "../Components/ReviewCardContainer";
import styles from "../styles/ReviewsPage.module.css";
import { getCategories } from "../utils/api";
import FilterAndSearch from "../Components/FilterAndSearch";
import { filterReviews } from "../utils/utils";
import Button from "@material-ui/core/Button";
import { useReviews } from "../hooks/ApiHooks";

const ReviewsPage = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  // const [reviewList, setReviewList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDisplayLimit, setCurrentDisplayLimit] = useState(10);
  const [sortQuery, setSortQuery] = useState("date");
  const [sortDir, setSortDir] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");

  const { reviewList, setReviewList, totalReviews, setTotalReviews } =
    useReviews(category, currentPage, currentDisplayLimit, sortQuery, sortDir);

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

  //maybe move into pag component
  const calcNumPages = () => {
    return Math.ceil(totalReviews / currentDisplayLimit);
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
        <Link to="/review/new">
          <Button variant="contained">Submit new review!</Button>
        </Link>
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
