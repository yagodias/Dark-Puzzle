import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import redirectTo from "../../../utils/MenuRedirectUtils";

const MenuHome = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box>
          <IconButton size="large" onClick={handleClickMenu}>
            <MenuIcon
              sx={{
                color: "#fff",
                margin: 1,
              }}
            />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={openMenu}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => redirectTo("/About")}>
              About The Game
            </MenuItem>
            <MenuItem onClick={() => redirectTo("/WhoAmI")}>Who Am I?</MenuItem>
            <MenuItem
              onClick={() =>
                redirectTo("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
              }
            >
              Nothing Here
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuHome;
