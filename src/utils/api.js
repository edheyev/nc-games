import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get(`/categories`).then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (
  category_slug,
  currentPage,
  displayLimit,
  sortBy,
  sortDir
) => {
  let path = `/reviews`;
  let pathMod = `?`;

  if (category_slug) {
    //add to path
    path += `${pathMod}category=${category_slug}`;
    pathMod = `&`;
  }
  if (currentPage !== 0) {
    path += `${pathMod}p=${currentPage}`;
    pathMod = `&`;
  }
  if (displayLimit !== 10) {
    path += `${pathMod}limit=${displayLimit}`;
    pathMod = `&`;
  }
  if (sortBy !== "date") {
    path += `${pathMod}sort_by=${sortBy}`;
    pathMod = `&`;
  }
  if (sortDir === "DESC") {
    path += `${pathMod}order=DESC`;
    pathMod = `&`;
  }
  console.log(path);
  return gamesApi.get(path).then((res) => {
    return res.data;
  });
};

export const getReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.reviews[0];
  });
};

export const getUsers = () => {
  return gamesApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getComments = (review_id, currentPage, displayLimit) => {
  let path = `/reviews/${review_id}/comments`;
  let pathMod = `?`;
  if (currentPage !== 0) {
    path += `${pathMod}p=${currentPage}`;
    pathMod = `&`;
  }
  if (displayLimit !== 10) {
    path += `${pathMod}limit=${displayLimit}`;
    pathMod = `&`;
  }

  return gamesApi.get(path).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (review_id, comment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((res) => {
      return res;
    });
};

export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
