import { Box } from "@mui/material";
import React from "react";
import { FiberManualRecord } from "@mui/icons-material";

interface DotsContainerProps {
  itemsLength: number;
  itemActive: number;
}

const arrayEmpty = (length: number) => {
  const array = new Array(length);
  return array;
};

const DotsContainer = ({ itemsLength, itemActive }: DotsContainerProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap=".1rem"
      position="absolute"
      bottom="10%"
      zIndex="999"
      width="100%"
      alignItems="center"
    >
      {[...arrayEmpty(itemsLength)].map((_e, i) => (
        <Box
          fontSize={itemActive === i ? "15px" : "7.5px"}
          key={`dotCarouselMobile-item-${i}`}
          color={
            itemActive === i ? " rgb(255, 255, 255)" : "rgb(192, 192, 192)"
          }
        >
          <FiberManualRecord fontSize="inherit" color="inherit" />
        </Box>
      ))}
    </Box>
  );
};

export default DotsContainer;
