import React, { useState } from "react";
import { memo } from "react";
import Image from "next/image";
import { Box, styled } from "@mui/material";
import { default as ImageProps } from "@/domain/models/Image";
import dynamic from "next/dynamic";
import Carousel from "@/features/Carousel/Carousel";
import { Close } from "@mui/icons-material";
import useIsMobile from "@/hooks/useIsMobile";

const LightBox = dynamic(() => import("@/features/LightBox/LightBox"), {
  ssr: true,
});

const StyledCloseButton = styled(Box)(
  ({ theme }) => `
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem;
  position: absolute;
  top: 0%;
  right: 0%;
  z-index: 100000000;
  cursor: pointer;
  color: ${theme.palette.text}
`
);

const ProductDetailsHeader = ({ image }: { image: ImageProps[] }) => {
  const [isLightBoxOpen, setOpenLight] = useState(false);
  const isMobile = useIsMobile();
  return (
    <Box
      position="relative"
      height="100%"
      sx={{
        ".&": { cursor: "pointer", userSelect: "none" },
        body: { overflowY: "hidden" },
      }}
      onClick={() => {
        setOpenLight(true);
      }}
    >
      <Image
        src={image[0].src}
        alt={image[0].alt}
        fill
        style={{ objectFit: "cover", cursor: "pointer" }}
        blurDataURL="/spinnerLoading.svg"
      />
      <LightBox
        open={isLightBoxOpen}
        setOpen={() => {
          setOpenLight(false);
        }}
      >
        <StyledCloseButton
          onClick={() => {
            setOpenLight(false);
          }}
        >
          <Close color="inherit" fontSize="large" />
        </StyledCloseButton>
        <Carousel images={image} hasArrows={!isMobile} />
      </LightBox>
    </Box>
  );
};

export default memo(ProductDetailsHeader);
