import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Level3 = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Typography>
          No criativity
        </Typography>
      </Box>

      <Box>
        <Image
          loader={({ src, width }) => {
            return `${src}?w=${width}`;
          }}
          width={350}
          height={300}
          title="Just me"
          alt="Just me"
          src="https://res.cloudinary.com/darkpuzzle/image/upload/v1656887963/Level3/me_ijkcek"
        />
      </Box>

      <Box>
        <Typography>
          Touch me
        </Typography>
      </Box>
    </Box>
  );
};

export default Level3;
