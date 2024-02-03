import { Box, Typography } from "@mui/material";
import React, { ReactNode, memo } from "react";

const ProductDescriptionSection = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem" p="1rem" pb="1.5rem">
      <Typography variant="h2" textAlign="left">
        Descripción
      </Typography>
      <Typography variant="body1" ml=".1rem">{children}</Typography>
    </Box>
  );
};

export default memo(ProductDescriptionSection);
