import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "4rem" }}>
      <AppBar position="static" sx={{ bgcolor: orange }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Power Chat
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <IconButton></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
