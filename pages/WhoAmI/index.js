import { Box, Button, Typography } from '@mui/material';

const WhoAmI = () => {
  return (
    <Box sx={{ color: '#fff' }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h2">
        Hello!!!
      </Typography>

      <Box p={8}>
        <Typography variant="h4">
          My name is Yago and i am happy.
        </Typography>
      </Box>
      
      <Box>
        <Button variant="contained" color="error" onClick={() => window.location = `${window.location.origin}/`}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default WhoAmI;
