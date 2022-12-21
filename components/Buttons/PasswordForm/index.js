import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Key from "@mui/icons-material/Key";
import { shouldPass } from "../../../utils/passwordUtils.js";

function PasswordForm({ nextLevel, password }) {
  const {
    handleSubmit,
    register,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });
  
  const onHandleSubmit = formData => {
    const answerReceived = formData.answer;

    const data = {
      answer: answerReceived,
      password: password,
      nextLevel: nextLevel,
    };

    shouldPass({ ...data });
  };

  return (
    <Box
      component="form"
      id="widget-password"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <TextField 
            variant="standard"
            fullWidth
            id="answer"
            placeholder="Type here"
            {...register('answer', {
              onChange: e => setValue('answer', e.target.value),
            })}
          />
        </Grid>
        <Grid item xs={2} mt={2}>
          <Button
            color="error"
            fullWidth
            variant="contained"
            type="submit"
          >
            <Key />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

PasswordForm.propTypes = {
  nextLevel: PropTypes.string,
  password: PropTypes.string,
};

PasswordForm.defaultProps = {
  nextLevel: '',
  password: '',
};

export default PasswordForm;