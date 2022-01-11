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
