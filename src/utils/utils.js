export const filterReviews = (reviewList, searchTerm, setRe) => {
  const outReviews = [];
};

export const userExists = (username, arr) => {
  return arr.some(function (el) {
    return el.username === username;
  });
};
