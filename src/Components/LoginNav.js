import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const LoginNav = () => {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? <div>LOGGED</div> : <Link to="/login">Log in</Link>;
};

export default LoginNav;
