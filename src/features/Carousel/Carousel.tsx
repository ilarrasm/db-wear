import React, { memo } from "react";
import { Box, Button, styled } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { ItemCarousel } from "./components/ItemCarousel/ItemCarousel";
import { useCarousel } from "./hooks/useCarousel";
import DotsContainer from "./components/DotsContainer/DotsContainer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface CarouselProps {
  images: ImageProps[];
  hasArrows?: boolean;
}

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  z-index: 9999;
`;

const StyledContainerMaster = styled(Box)`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  align-self: center;
`;

const StyledContainerChildren = styled(Box)`
  position: relative
  flex: 0 0 100%;
  transition: transform 1s ease-in-out;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Carousel = ({ images, hasArrows = false }: CarouselProps) => {
  const {
    handleTouchStart,
    handleTouchEnd,
    currentIndex,
    goToNextSlide,
    goToPrevSlide,
  } = useCarousel(images.length);
  return (
    <Box
      sx={{
        display: "flex",
        width: "80vw",
        height: "100vh",
        position: "relative",
        overflowX: "hidden",
        top: 0,
      }}
    >
      {hasArrows && (
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            goToPrevSlide();
          }}
          sx={{ left: 0 }}
          color="inherit"
        >
          <ChevronLeftIcon fontSize="large" color="inherit" />
        </StyledButton>
      )}
      <StyledContainerMaster
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <StyledContainerChildren>
          {images.map(({ src, alt }, positionIndex, array) => (
            <ItemCarousel
              currentIndex={currentIndex}
              indexElement={positionIndex}
              lengthElements={array.length}
              key={`${src}+${alt}`}
            >
              <Image src={src} fill alt={alt} style={{ objectFit: "cover" }} />
            </ItemCarousel>
          ))}
          <DotsContainer
            itemsLength={images.length}
            itemActive={currentIndex}
          />
        </StyledContainerChildren>
      </StyledContainerMaster>
      {hasArrows && (
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            goToNextSlide();
          }}
          sx={{ right: "0%" }}
          color="inherit"
        >
          <ChevronRightIcon fontSize="large" color="inherit" />
        </StyledButton>
      )}
    </Box>
  );
};

export default memo(Carousel);
