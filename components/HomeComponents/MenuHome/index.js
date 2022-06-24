import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuHome = () => {
  return (
    <Toolbar>
      <AppBar position="static" sx={{ backgroundColor: "#202020" }}>
          <Box display="flex" alignItems="center" justifyContent="end">
            <IconButton
              size="large"
              sx={{ color: '#fff', margin: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
      </AppBar>
    </Toolbar>
  );
};

export default MenuHome;
