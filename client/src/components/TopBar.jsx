import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Appbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#181b38' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rento
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <IconButton size="large" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              sx={{
                ml: 1,
                width: isSearchVisible ? "250px" : "0",
                border: isSearchVisible ? "1px solid black" : "0",
                borderRadius: "10px",
                alignContent: "center",
                overflow: "hidden",
                transition: "width 0.3s ease-in-out",
              }}
            />
          </div>

          <Button color="inherit" sx={{ ml: 2 }}>
            Profile
          </Button>

          <Button color="inherit" sx={{ ml: 2 }}>
            Login
          </Button>

          <Button color="inherit" sx={{ ml: 2 }}>
            Signup
          </Button>

          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
