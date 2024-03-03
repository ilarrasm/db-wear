const stylesRules = {
  active: {
    display: "block",
    transform: "translateX(0)",
  },
  prevItem: {
    display: "block",
    transform: "translateX(-100%)",
  },
  nextItem: {
    display: "block",
    transform: "translateX(100%)",
  },
};

const applyStyleRules = ({
  currentIndex,
  indexElement,
  lengthElements,
}: {
  currentIndex: number;
  indexElement: number;
  lengthElements: number;
}) => {
  const isLastItem = indexElement === lengthElements - 1;
  const isFirstItem = indexElement === 0;
  if (currentIndex === indexElement) {
    return stylesRules["active"];
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

export default applyStyleRules;
