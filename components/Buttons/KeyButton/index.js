import { Box, Button } from '@mui/material';
import Key from '@mui/icons-material/Key';

export default function KeyButton() {
  return (
    <Box mt={8}>
      <Button variant="contained" color="error" onClick={() => window.prompt('What is the password?')}>
        <Key />
      </Button>
    </Box>
  );
};
