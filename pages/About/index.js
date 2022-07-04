import { Box, Typography } from "@mui/material";
import ButtonAbout from "../../components/AboutComponents/ButtonAbout";

export default function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Box sx={{ color: 'white', padding: 4 }}>
        <Typography variant="h2">
          Hi!
        </Typography>
        <Box p={4}>
          <Typography variant="h5">
            This game is a private development, provided with practice knowledge
          </Typography>
        </Box>
      </Box>
      
      <ButtonAbout path="/" />
    </Box>
  );
};
