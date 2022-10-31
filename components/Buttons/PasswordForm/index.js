import { Box, TextField, Typography } from "@mui/material";

function PasswordForm() {
  return (
    <>  
      <Box>
        <Typography>
          What is the password?
        </Typography>
      </Box>
      <Box>
        <TextField 
          variant="standard"
          fullWidth
          id="password"
          placeHolder="Type here"
        />
      </Box>
    </>
  );
}

export default PasswordForm;