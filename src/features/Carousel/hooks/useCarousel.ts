import { useCallback, useRef, useState } from "react";

const UMBRALX = 50;
const UMBRALY = 40;

export const useCarousel = (lengthElements: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const touchStart = useRef<{ y: number | null; x: number | null }>({
    y: null,
    x: null,
  });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current.x = e.touches[0].clientX;
    touchStart.current.y = e.touches[0].clientY;
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lengthElements - 1 : prevIndex - 1
    );
  }, [lengthElements]);
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === lengthElements - 1 ? 0 : prevIndex + 1
    );
  }, [lengthElements]);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current.x === null || touchStart.current.y === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStart.current.x - touchEndX;
    const deltaY = Math.abs(touchStart.current.y - touchEndY);

    if (deltaY <= UMBRALY) {
      if (deltaX > UMBRALX) {
        goToPrevSlide();
      }
      if (deltaX < -UMBRALX) {
        goToNextSlide();
      }
    }

    touchStart.current.x = null;
    touchStart.current.y = null;
    setTransition(true);
  };

  return {
    handleTouchStart,
    handleTouchEnd,
    currentIndex,
    transition,
    goToNextSlide,
    goToPrevSlide,
  };
};
