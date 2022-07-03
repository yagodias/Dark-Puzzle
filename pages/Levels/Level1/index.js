import { Box, Typography } from '@mui/material';
import KeyButton from '../../../components/Buttons/KeyButton';

const Level1 = () => {
  return (
    <Box color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box m={2} textAlign="center">
        <Typography variant="h2">
          pii pi pipi
        </Typography>
        <Typography variant="h5">
          -.. .- .-. -.- / .--. ..- --.. --.. .-.. .
        </Typography>
      </Box>
    
      <KeyButton passwordValue="dark puzzle" redirect="/" />
    
      <Typography variant="body2">
        More to come...
      </Typography>
    </Box>
  );
};

export default Level1;
