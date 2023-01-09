import { AppBar, IconButton, Toolbar } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/system";
import React from "react";
import logo from "../images/site-logo.png";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#00000000", border: 0, boxShadow: 0, pt: 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src={logo}
              alt="grit logo"
              className="h-8 w-8 md:h-10 md:w-10 hover:cursor-pointer"
            />
          </IconButton>
          <div className={`hover:cursor-pointer ${"md:hidden"}`}>
            <AccountCircleOutlinedIcon
              fontSize="medium"
              sx={{ color: "black" }}
            />
          </div>
          <div className={`hover:cursor-pointer ${"mobile:hidden"}`}>
            <AccountCircleOutlinedIcon
              fontSize="large"
              sx={{ color: "black" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
