import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import KeyButton from '../../../components/Buttons/KeyButton';

const Level1 = () => {
  return (
    <>
      <Head>
          <title>Level1</title>
      </Head>

      <Box
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box m={2}>
          <Typography variant="h2">
            pii pi pipi
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="h5">
            -.. .- .-. -.- / .--. ..- --.. --.. .-.. .
          </Typography>
        </Box>
      
        <KeyButton passwordValue="dark puzzle" redirect="./darkpuzzle" />
      </Box>
    </>
  );
};

export default Level1;
