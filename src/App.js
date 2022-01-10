import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import TopNav from "./Components/TopNav";
import AppName from "./Components/AppName";
import ReviewsPage from "./pages/ReviewsPage";

import styles from "./styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.tempStyles}>
        <TopNav />
        <AppName />
      </div>
      <Routes>
        <Route path="/" element={<ReviewsPage />}></Route>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/categories/:category" element={<ReviewsPage />}></Route>
        {/* <Route path="/review/:review_id" element={<ReviewsPage />}></Route> */}
        {/* <Route path="/users" element={<ReviewsPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
