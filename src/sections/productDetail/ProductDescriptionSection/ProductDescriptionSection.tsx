import { Box, Typography } from "@mui/material";
import React, { ReactNode, memo } from "react";

const ProductDescriptionSection = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center">
        Descripción
      </Typography>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};

export default memo(ProductDescriptionSection);
