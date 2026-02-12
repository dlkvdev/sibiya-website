// components/SpecialAlert.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SpecialAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isThrowing, setIsThrowing] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Show on every refresh (testing)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (withThrow = true) => {
    if (withThrow) {
      setIsThrowing(true);
      setTimeout(() => setIsVisible(false), 600); // match animation duration
    } else {
      setIsVisible(false);
    }
    setTranslateY(0);
  };

  const handleInterested = () => {
    const message = encodeURIComponent(
      "Hi Sibiya Funeral Services! I'm interested in the 'NO WAITING PERIOD SPECIAL' offer."
    );
    window.open(`https://wa.me/27727001800?text=${message}`, "_blank");
    handleClose(true);
  };

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 0) setTranslateY(deltaY);
  };

  const handleTouchEnd = () => {
    if (touchStartY === null) return;
    if (translateY > 120) {
      handleClose(true); // trigger throw animation
    } else {
      setTranslateY(0); // snap back
    }
    setTouchStartY(null);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.65, opacity: 0, y: 80, rotateX: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={
              isThrowing
                ? {
                    scale: 0.4,
                    opacity: 0,
                    y: [0, -150, 800], // fly off upward then down
                    rotate: [0, -15, 45], // spin while throwing
                    transition: { duration: 0.6, ease: "easeIn" }
                  }
                : { scale: 0.65, opacity: 0, y: 80 }
            }
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
              duration: isThrowing ? 0.6 : 0.5
            }}
            style={{ transform: `translateY(${translateY}px)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden touch-pan-y"
          >
            {/* Close button - red circle */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClose(true)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Close alert"
            >
              <X size={24} />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="w-full h-64 relative"
            >
              <img
                src="/images/specials/special.jpg"
                alt="No Waiting Period Special"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content - staggered entrance */}
            <div className="p-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-4"
              >
                NO WAITING PERIOD SPECIAL
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              >
                From the 2nd of March 2026 till the 6th of April 2026
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96, y: 2 }}
                onClick={handleInterested}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all text-lg"
              >
                I'm Interested
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-4 text-sm text-gray-500 dark:text-gray-400"
              >
                Contact us today: 072 700 1800
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}