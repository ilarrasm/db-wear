import { Box } from "@mui/material";
import React, { memo } from "react";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="fit-content"
      padding="1rem"
      border="1px 0px black"
      onClick={() => {}}
    >
      {/* <Box>
        <MenuOutlinedIcon fontSize="large" />
      </Box> */}
      <Logo />
      {/* <Box onClick={() => {}}>
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Box> */}
    </Box>
  );
};

export default memo(Header);
