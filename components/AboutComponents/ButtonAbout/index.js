import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import redirectTo from '../../../utils/MenuRedirectUtils';

const ButtonAbout = ({ path }) => {
  return (
    <Box>
      <Button variant="contained" color="error" onClick={() => redirectTo(path)}>
        Back
      </Button>
    </Box>
  );
};

ButtonAbout.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ButtonAbout;