import { Box } from '@mui/material';
import MenuHome from "../MenuHome";
import LinkToTutorial from "../../Links/LinkToTutorial";

export default function Start() {
  return (
    <>
      <MenuHome />
      <Box sx={{ margin: 'auto' }} display="flex" justifyContent="center">
        <LinkToTutorial />
      </Box>
    </>
  );
};
