import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../hooks/CustomHooks";
import { getUser } from "../utils/api";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const { loadComponent, setIsLoading, setIsError } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    getUser(username)
      .then((userFromApi) => {
        setIsLoading(false);
        setUser(userFromApi);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loadComponent}

      <Paper
        sx={{
          background: "secondary",
          p: 1,
          m: 3,
          maxWidth: "75%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <h1>Username: {user.username}</h1>
          </Box>
          <Box
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <h2>Name: {user.name}</h2>
          </Box>
          <Box
            sx={{
              p: 1,
              m: 3,
            }}
          >
            <img src={user.avatar_url} maxwidth={600} />
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default UserPage;
