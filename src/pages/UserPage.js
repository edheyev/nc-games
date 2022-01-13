import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/api";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    getUser(username)
      .then((userFromApi) => {
        setUser(userFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Paper
        sx={{
          background: "secondary",
          p: 1,
          m: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Paper
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <h1>Username: {user.username}</h1>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <h2>Name: {user.name}</h2>
          </Paper>
          <Paper
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <img src={user.avatar_url} width={"100%"} />
          </Paper>
        </Box>
      </Paper>
    </div>
  );
};

export default UserPage;
