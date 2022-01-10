import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryFilter from "../Components/CategoryFilter";
import ReviewCard from "../Components/ReviewCard";
import ReviewCardContainer from "../Components/ReviewCardContainer";
import styles from "../styles/ReviewsPage.module.css";
import { getCategories, getReviews } from "../utils/api";

const ReviewsPage = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getCategories()
      .then((catsFromApi) => {
        setCategoryList(catsFromApi);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getReviews(category)
      .then((reviewsFromApi) => {
        console.log(reviewsFromApi);
        setReviewList(reviewsFromApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);

  return (
    <div>
      <CategoryFilter categoryList={categoryList} />
      {category && <h1>{category}</h1>}
      <div>
        <div>PAGE X OF X</div>
        <div>Display X per page</div>
      </div>
      <div className={styles.review_container}>
        {reviewList.map((review, i) => {
          return <ReviewCard review={review} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ReviewsPage;
/*
//TO DO 
--reviews page
- categoriy filter
-pagination
-sort by
- search bar?
-loading 
-error handling

-- cards 
sort look out

-- review page
*/
