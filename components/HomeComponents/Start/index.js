import { Box, Grid, Typography } from '@mui/material';
import MenuHome from "../MenuHome";
import LinkToTutorial from "../../Links/LinkToTutorial";

export default function Start() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>
          <MenuHome />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ margin: 'auto' }} display="flex" justifyContent="center">
          <LinkToTutorial />
        </Box>
      </Grid>
    </Grid>
  );
};
