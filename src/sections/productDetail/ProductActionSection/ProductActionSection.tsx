import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { memo } from "react";

/* 
Crear componente que se utilice como ui del cambio de talles.
Crear componente que se utilice como ui del cambio de colores.
crear util para el texto texto de whatsapp.
*/

interface ProductActionSectionProps {
  productId: string;
  colors: string[];
  sizes: string[];
}

const ProductActionSection = ({
  productId,
  colors,
  sizes,
}: ProductActionSectionProps) => {
  const theme = useTheme();
  return (
    <Box p="1rem">
      <Box>
        <Typography variant="h3">Talles</Typography>
        <Box display="flex" gap="1rem" py="1rem">
          {sizes.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography variant="h3">Color/es</Typography>
        <Box display="flex" gap="1rem" py="1rem">
          {colors.map((color) => (
            <Typography variant="body2" key={color}>
              {color}
            </Typography>
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          console.log(
            `https://api.whatsapp.com/send?phone=${"aca va el numero"}&text=pito${productId}`
          );
        }}
        sx={{ bgcolor: theme.palette.common.black }}
      >
        Consultar
      </Button>
    </Box>
  );
};

export default memo(ProductActionSection);
