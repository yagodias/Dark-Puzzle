import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Level3 = () => {
  const router = useRouter();
  const [levelForRoute, setLevelForRoute] = useState('');

  const imagePassword = () => {
    const pass = window.prompt('Do you like me?');
    
    if (pass === 'yes') {
      setLevelForRoute('/levels/yes');
      router.push(levelForRoute);
    } else if (pass === 'no') {
      window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
      window.alert('yes or no');
    }
  };

  return (
    <>
      <Head>
        <title>Level3</title>
      </Head>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="#fff"
      >
        <Box>
          <Typography variant="h2">
            No criativity
          </Typography>
        </Box>

        <Box>
          <Image
            alt="Just me"
            loader={({ src, width }) => {
              return `${src}?w=${width}`;
            }}
            height={300}
            onClick={() => imagePassword()}
            src="https://res.cloudinary.com/darkpuzzle/image/upload/v1656887963/Level3/me_ijkcek"
            title="Just me"
            width={350}
          />
        </Box>

        <Box>
          <Typography variant="h5">
            Touch me
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Level3;
