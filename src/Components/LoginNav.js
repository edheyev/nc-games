import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const LoginNav = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <Box>
      {isLoggedIn ? (
        <Link to={`/user/${user.user}`}>{user.user}</Link>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </Box>
  );
};

export default LoginNav;
