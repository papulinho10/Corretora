import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';

const BANNERS = [
  "https://i.postimg.cc/8CRP8rF5/1.png",
  "https://i.postimg.cc/Hnxp7Z6L/2.png"
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swipe left
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
      startTimer();
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
      startTimer();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <div className="w-full mb-8 md:mb-12 flex flex-col items-center">
      <div className="relative w-full overflow-hidden flex items-center justify-center bg-transparent">
        {/* Hidden placeholder to set container height dynamically based on image aspect ratio */}
        <img 
          src={BANNERS[0]} 
          alt="Placeholder" 
          className="w-full h-auto opacity-0 pointer-events-none" 
          referrerPolicy="no-referrer"
        />
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={BANNERS[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute top-0 left-0 w-full h-full object-contain cursor-grab active:cursor-grabbing"
            alt={`Banner ${currentIndex + 1}`}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>
      
      {/* Pagination Dots and Counter */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex justify-center gap-2">
          {BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                startTimer();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-accent w-6' 
                  : 'bg-brand-text-light/30 hover:bg-brand-text-light/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-brand-text-light text-xs tracking-widest font-medium">
          {currentIndex + 1} / {BANNERS.length}
        </div>
      </div>
    </div>
  );
}
