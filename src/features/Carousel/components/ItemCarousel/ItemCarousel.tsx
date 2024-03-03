import React, { FC, HTMLProps } from "react";
import { Box } from "@mui/material";
import applyStyleRules from "../../utils/helpers/applyStyleRules";

interface ItemCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  currentIndex: number;
  indexElement: number;
  lengthElements: number;
}

export const ItemCarousel = ({
  currentIndex,
  indexElement,
  lengthElements,
  children,
}: ItemCarouselProps) => {
  return (
    <Box
      sx={{
        display: "none",  
        position: "absolute",
        flex: "0 0 100%",
        transition: "transform 0.1s ease-in-out",
        width: '100%',
        height: '100%',
        ...applyStyleRules({ currentIndex, indexElement, lengthElements }),
      }}
    >
      {children}
    </Box>
  );
};

// si un imagen está activa debe tener transformX(0)
// la anterior a dicha foto debe tener transformX(-100%)
// la siguiente a dicha foto debe tener transformX(100%)
// si la primera imagen está activa, la última tendra transformX(-100%)
// si la ultima imagen está activa, la primera tendra transformX(100%)

// if currentIndex === indexElement => transformX(0)
// if currentIndex === indexElement + 1 => transformX(100%)
// if currentIndex === indexElement - 1 => transformX(-100%)

// if currentIndex === img.length - 1 => indexElement === 0 => transformX(+100%)
// if currentIndex ===  0 => indexElement === img.length - 1 => transformX(-100%)

/* 


.carousel-item {  
    display: none;
    position: absolute;
    flex: 0 0 100%;
    transition: transform 0.3s ease-in-out;
  }

sx={{display: 'none', position: 'absolute', flex: '0 0 100%', transition: 'transform 0.3s ease-in-out' }}


.active {
  display: block;
  transform: translateX(0);
}



.nextItem {
  display: block;
  transform: translateX(100%);
}


const stylesRules = {
  active: {
    display: 'block',
    transform: 'translateX(0)',
  },
  prevItem: {
  display: 'block',
  transform: 'translateX(-100%)',
},
nextItem: {
  display: 'block',
  transform: 'translateX(100%)',
}
} 

const applyStyleRules = ({
  currentIndex,
  indexElement,
  lengthElements,
}: ItemCarouselProps) => {
  const isLastItem = indexElement === lengthElements - 1;
  const isFirstItem = indexElement === 0;
  if (currentIndex === indexElement) {
    return style["active"];
  }
  if (isLastItem) {
    if (currentIndex === 0) return stylesRules["prevItem"];
  }
  if (isFirstItem) {
    if (currentIndex === lengthElements - 1) return stylesRules["nextItem"];
  }
  if (currentIndex === indexElement + 1) return stylesRules["prevItem"];
  if (currentIndex === indexElement - 1) return stylesRules["nextItem"];
  return {};
};


*/
