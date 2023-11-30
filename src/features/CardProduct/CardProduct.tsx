import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";

interface CardProduct {
  title: string;
  price: string;
  img: string; // esto pasa a ser una objeto con todo lo que necesitamos para la img
  info: string;
  subTitle: string;
}

const StyledHeader = styled(Box)(
  ({ theme }) => `
  display: flex;
  position: relative;
  background: ${theme.palette.common.white};
  width: 100%;
  height: 190px;
  p {
    position: absolute;
    bottom: 0;
    right: .5rem;
    background: ${theme.palette.common.white};
    border-radius: 0.25rem 0.25rem 0rem 0rem; 
  }
`
);

const CardProduct = ({ title, price, img, info, subTitle }: CardProduct) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="1rem"
      borderRadius="8px"
      bgcolor="#F5F5F5"
      overflow="hidden"
    >
      {/* Header */}
      <StyledHeader>
        <Image src="/headerHome.jpg" fill alt={img} />
        {!!price && <Typography p=".25rem 1rem 0">{price}</Typography>}
      </StyledHeader>
      {/* Body */}
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        p=".25rem 0 1rem 1rem"
        rowGap=".25rem"
      >
        <Typography component="h3" variant="h3">
          {title}
        </Typography>
        <Typography fontSize="0.6875rem" fontWeight="300">
          {subTitle}
        </Typography>
        {!!info && (
          <Typography fontSize="0.5625rem" fontStyle="italic" fontWeight="100">
            {info}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default memo(CardProduct);
