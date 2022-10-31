import { useState } from 'react';
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import Key from "@mui/icons-material/Key";
import redirectTo from "../../../utils/MenuRedirectUtils";
import FullscreenDialog from '../../FullscreenDialog';
import PasswordForm from '../PasswordForm';

const KeyButton = ({ question, passwordValue, redirect }) => {
  const [open, setOpen] = useState(false);
  
  const handleButtonOpen = () => {
    setOpen(true);
  };

  // const password = (question, key, level) => {
  //   const answer = window.prompt(question);

  //   if (answer === key) {
  //     redirectTo(level);
  //   } else {
  //     window.alert("WRONG!!!!");
  //   }
  // };

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
        open={open}
        setOpen={setOpen}
      >
        <PasswordForm />
      </FullscreenDialog>
    </Box>
  );
};

KeyButton.propTypes = {
  question: PropTypes.string,
  passwordValue: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

KeyButton.defaultProps = {
  question: "What is the password?",
};

export default KeyButton;
