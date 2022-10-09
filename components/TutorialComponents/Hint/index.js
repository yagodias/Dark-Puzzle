import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Info from "@mui/icons-material/Info";

const Hint = () => {
  const [openHint, setOpenHint] = useState(false);

  const alertHint = () => {
    setOpenHint(true);

    if (setOpenHint) {
      window.alert("All the keys in lowercase");
    }
  };

  return (
    <Box>
      <IconButton onClick={() => alertHint()} open={openHint}>
        <Info sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default Hint;
