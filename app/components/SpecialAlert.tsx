// components/SpecialAlert.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SpecialAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isShattering, setIsShattering] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Show once a day (check localStorage)
  useEffect(() => {
    const lastShown = localStorage.getItem("specialAlertLastShown");
    const now = Date.now();
    const oneDayMs = 86400000; // 24 hours in ms

    if (!lastShown || now - Number(lastShown) > oneDayMs) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Update localStorage timestamp when shown
  useEffect(() => {
    if (isVisible) {
      localStorage.setItem("specialAlertLastShown", Date.now().toString());
    }
  }, [isVisible]);

  // Glass shatter effect on close
  const createGlassShatter = (centerX: number, centerY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Shard {
      x: number;
      y: number;
      vx: number;
      vy: number;
      width: number;
      height: number;
      rotation: number;
      rotSpeed: number;
      life: number;
    }

    const shards: Shard[] = [];

    // Create 40 glass-like shards
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 4;
      const size = Math.random() * 30 + 15;
      shards.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 8,
        width: size,
        height: size * (Math.random() * 0.6 + 0.4),
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shards.forEach((s, i) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.22; // gravity
        s.vx *= 0.99;
        s.rotation += s.rotSpeed;
        s.life -= 0.018;

        if (s.life <= 0) {
          shards.splice(i, 1);
          return;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate((s.rotation * Math.PI) / 180);
        ctx.globalAlpha = s.life;
        ctx.fillStyle = "rgba(200, 220, 255, 0.4)"; // semi-transparent glass
        ctx.fillRect(-s.width / 2, -s.height / 2, s.width, s.height);
        ctx.restore();
      });

      if (shards.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    // Cleanup canvas after animation
    setTimeout(() => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    }, 2500);
  };

  const handleClose = () => {
    if (popupRef.current) {
      const rect = popupRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      createGlassShatter(centerX, centerY);
    }

    setIsShattering(true);
    setTimeout(() => {
      setIsVisible(false);
      setTranslateY(0);
      setIsShattering(false);
    }, 800); // match shatter animation duration
  };

  const handleInterested = () => {
    const message = encodeURIComponent(
      "Hi Sibiya Funeral Services! I'm interested in the 'NO WAITING PERIOD SPECIAL' offer."
    );
    window.open(`https://wa.me/27727001800?text=${message}`, "_blank");
    handleClose();
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
    if (translateY > 130) {
      handleClose();
    } else {
      setTranslateY(0);
    }
    setTouchStartY(null);
  };

  return (
    <>
      {/* Canvas for glass shatter effect */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[60]"
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              ref={popupRef}
              initial={{ scale: 0.75, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
                mass: 1.2,
              }}
              style={{ transform: `translateY(${translateY}px)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden touch-pan-y"
            >
              {/* Red close button */}
              <motion.button
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Close alert"
              >
                <X size={24} />
              </motion.button>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="w-full h-64 relative"
              >
                <img
                  src="/images/specials/special.jpg"
                  alt="Special Offer - Sibiya Funeral Services"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-4"
                >
                  NO WAITING PERIOD SPECIAL
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6"
                >
                  From the 2nd of March 2026 till the 6th of April 2026
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleInterested}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all text-lg"
                >
                  I'm Interested
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                >
                  Contact us today: 072 700 1800
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}