import { useState } from 'react';
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import Key from "@mui/icons-material/Key";
import FullscreenDialog from '../../FullscreenDialog';
import PasswordForm from '../PasswordForm';

const KeyButton = ({ passwordValue, redirect }) => {
  const [open, setOpen] = useState(false);
  
  const handleButtonOpen = () => {
    setOpen(!open);
  };

  return (
    <Box mt={8}>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleButtonOpen()}
      >
        <Key />
      </Button>

      <FullscreenDialog
        divider={false}
        maxWidth="sm"
        open={open}
        setOpen={setOpen}
        title="What is the password?"
      >
        <PasswordForm nextLevel={redirect} password={passwordValue} />
      </FullscreenDialog>
    </Box>
  );
};

KeyButton.propTypes = {
  passwordValue: PropTypes.string,
  redirect: PropTypes.string,
};

KeyButton.defaultProps = {
  passwordValue: '',
  redirect: '',
};

export default KeyButton;
