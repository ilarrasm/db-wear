import React from "react";
import { memo } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const ProductDetailsHeader = ({
  title,
  price,
  image,
}: {
  title: string;
  price: string;
  image: string;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Box position="relative" height="300px">
        <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      </Box>
      <Box p="1rem">
        <Typography variant="h1" textAlign="left">
          {title}
        </Typography>
        <Typography variant="body2" ml=".4rem">{price}</Typography>
      </Box>
    </Box>
  );
};

export default memo(ProductDetailsHeader);
