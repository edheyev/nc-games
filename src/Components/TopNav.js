import React from "react";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const TopNav = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <div>
        <Link to="/">Reviews</Link>
        <Link to="/users">Users</Link>
        <LoginNav />
      </div>
    </div>
  );
};

export default TopNav;
