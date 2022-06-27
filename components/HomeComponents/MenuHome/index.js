import { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import redirectTo from '../../../utils/MenuRedirectUtils';

const MenuHome = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box>
          <IconButton
            size="large"
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon
              sx={{
                color: '#fff',
                margin: 1,
              }}
            />
          </IconButton>
            <Menu
              id="menu"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={openMenu}
              onClose={() => setOpenMenu(false)}
            >
              <MenuItem onClick={() => setOpenMenu(false)}>About The Game</MenuItem>
              <MenuItem onClick={() => redirectTo('/WhoAmI')}>Who Am I?</MenuItem>
              <MenuItem onClick={() => redirectTo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>Nothing Here</MenuItem>
            </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuHome;
