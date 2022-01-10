import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get(`/categories`).then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category_slug) => {
  let path = `/reviews`;
  if (category_slug) {
    //add to path
    path += `?category=${category_slug}`;
  }
  return gamesApi.get(path).then((res) => {
    return res.data.reviews;
  });
};
