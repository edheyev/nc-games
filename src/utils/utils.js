import { getReviews } from "./api";

export const filterReviews = (searchTerm, setReviews) => {
  getReviews("", 1, 9999, "date", "ASC")
    .then(({ reviews }) => {
      const outReviews = reviews.filter((review) => {
        return review.title.includes(searchTerm);
      });
      setReviews(outReviews);
    })
    .catch((err) => {
      return err;
    });
};

export const userExists = (username, arr) => {
  return arr.some(function (el) {
    return el.username === username;
  });
};

export const storageAvailable = (type) => {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};
