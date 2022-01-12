import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const LoginNav = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? <>{user.user}</> : <Link to="/login">Log in</Link>;
};

export default LoginNav;
