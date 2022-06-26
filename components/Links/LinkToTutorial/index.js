import Link from 'next/link';
import { Typography } from '@mui/material';

const LinkToTutorial = () => {
  return (
    <Link href="/Tutorial">
      <Typography variant="h2" component="span" sx={{ color: '#fff', cursor: 'pointer' }}>
        Dark Puzzle
      </Typography>
    </Link>
  );
};

export default LinkToTutorial;
