import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

type ColorProp = "black" | "white";

const Logo = ({ color = "black" }: { color?: ColorProp }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography fontSize="30px" fontWeight="900" color={color}>
        D&B
      </Typography>
      <Typography fontSize="12px" fontWeight="200" color={color}>
        Costumes Wear
      </Typography>
    </Box>
  );
};

export default memo(Logo);
