import { useTheme } from "@material-ui/core";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TopNav = () => {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  return (
    <AppBar color="default" position="sticky">
      {/* <Link to="/">Home</Link> */}
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{}}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                BORED REVIEWS
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <LoginNav />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
