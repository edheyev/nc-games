import { Button, TextField } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { getUsers } from "../utils/api";
import { userExists } from "../utils/utils";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userList, setUserList] = useState([]);
  const { setUser, isLoggedIn } = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState("pre");

  useEffect(() => {
    if (!isLoggedIn) {
      setLoginStatus("pre");
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    getUsers().then((users) => {
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
    });
  };

  return (
    <div>
      LOGIN PAGE
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
        {loginStatus === "error" ? <p>LOGIN ERROR</p> : <></>}
        {loginStatus === "logged" ? (
          <div>
            LOGIN success
            <Link to="/">
              <Button variant="contained">Home</Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
