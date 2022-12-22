import Head from "next/head";
import { Box, Typography } from "@mui/material";
import KeyButton from "../../../components/Buttons/KeyButton";

const Level2 = () => {
  return (
    <>
      <Head>
        <title>ascii</title>
      </Head>

      <Box
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box textAlign="center" m={6}>
          <Typography variant="h3">
            100 097 114 107 032 112 117 122 122 108 101
          </Typography>
        </Box>

          <KeyButton id="buttonPassword" passwordValue="dark puzzle" redirect="/level3" />
      </Box>
    </>
  );
};

export default Level2;