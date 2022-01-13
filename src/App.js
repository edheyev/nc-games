import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import TopNav from "./Components/TopNav";
import AppName from "./Components/AppName";
import ReviewsPage from "./pages/ReviewsPage";

import styles from "./styles/App.module.css";
import NewReview from "./pages/NewReview";
import LoginPage from "./pages/LoginPage";
import ReviewPage from "./pages/ReviewPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.tempStyles}>
        <div>
          <TopNav />
        </div>
        <div>
          {/* {" "}
          <AppName /> */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ReviewsPage />}></Route>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/categories/:category" element={<ReviewsPage />}></Route>
        <Route path="/review/new" element={<NewReview />}></Route>
        <Route path="/review/:review_id" element={<ReviewPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/user/:username" element={<UserPage />}></Route>
        {/* <Route path="/review/:review_id" element={<ReviewsPage />}></Route> */}
        {/* <Route path="/users" element={<ReviewsPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
