import React, { memo } from "react";
import Logo from "../Logo/Logo";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      bgcolor="#363537"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="1rem"
    >
      <Logo color="white" />
      <Box display="flex" alignItems="flex-end" flexDirection="column">
        <Typography color="white">Barcelona, España</Typography>
        <Typography color="white">2023</Typography>
      </Box>
    </Box>
  );
};

export default memo(Footer);
