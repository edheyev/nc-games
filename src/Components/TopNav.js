import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <Link to="/">Reviews</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default TopNav;
