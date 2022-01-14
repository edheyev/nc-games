import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { getUsers } from "../utils/api";
import { userExists } from "../utils/utils";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import { useLoading } from "../hooks/CustomHooks";

const LoginPage = () => {
  const [userList, setUserList] = useState([]);
  const { user, setUser, isLoggedIn } = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState("pre");
  const { loadComponent, setIsLoading, setIsError } = useLoading();

  useEffect(() => {
    if (!isLoggedIn) {
      setLoginStatus("pre");
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoading(true);

    getUsers()
      .then((users) => {
        setIsLoading(false);
        let userName = document.getElementById("userInput").value;
        setUserList(users);
        if (userExists(userName, users)) {
          //login succeeded
          setUser({ user: userName });
          setLoginStatus("logged");
        } else {
          //login Failed
          setLoginStatus("error");
        }
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          p: 1,
          maxWidth: 500,
          m: "auto",
        }}
      >
        <Typography variant="h5">Log in</Typography>
        <div>
          {!isLoggedIn && (
            <div>
              <TextField
                id="userInput"
                label="Username"
                variant="standard"
                value="tickle122"
              />
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </div>
          )}
          {loginStatus === "error" ? <p>Username not found</p> : <></>}
          {loginStatus === "logged" ? (
            <div>
              <Typography variant="h6">Welcome {user.user}!</Typography>
              <Link to="/">
                <Button variant="contained">Home</Button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Paper>
    </Box>
  );
};

export default LoginPage;
