import React from "react";
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
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rento
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <IconButton size="large">
              <SearchIcon />
            </IconButton>
            <InputBase
              // placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              sx={{
                ml: 1,
                width: "250px",
                border: "1px solid black",
                borderRadius: "10px",
                alignContent: "center",
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
