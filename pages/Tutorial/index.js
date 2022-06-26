import React from 'react';
import { Box, Typography } from '@mui/material';
import Hint from '../../components/TutorialComponents/Hint';
import KeyButton from '../../components/Buttons/KeyButton';

const Tutorial = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h2" sx={{ color: '#fff' }}>
        Welcome to tutorial
      </Typography>

      <Hint />

      <Typography variant="h4" sx={{ color: '#fff', marginTop: 8 }}>
        1 + ! = ?
      </Typography>

      <KeyButton />
    </Box>
  );
};

export default Tutorial;