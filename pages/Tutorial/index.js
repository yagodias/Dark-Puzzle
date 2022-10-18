import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Hint from "../../components/TutorialComponents/Hint";
import KeyButton from "../../components/Buttons/KeyButton";

const Tutorial = () => {
  return (
    <>
      <Head>
        <title>Tutorial</title>
      </Head>

      <Box textAlign="center">
        <Typography variant="h2" sx={{ color: "#fff" }}>
          Welcome to tutorial
        </Typography>

        <Hint />

        <Typography variant="h4" sx={{ color: "#fff", marginTop: 8 }}>
          1 + ! = ?
        </Typography>

        <KeyButton passwordValue="2" redirect="/levels/2" />
      </Box>
    </>
  );
};

export default Tutorial;
