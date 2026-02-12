// components/SpecialAlert.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SpecialAlert() {
  const [isVisible, setIsVisible] = useState(false);

  // Show on every page refresh (testing mode)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500); // 1.5s delay for natural feel
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleInterested = () => {
    const message = encodeURIComponent(
      "Hi Sibiya Funeral Services! I'm interested in the 'NO WAITING PERIOD SPECIAL' offer."
    );
    window.open(`https://wa.me/27727001800?text=${message}`, "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          {/* Popup container with scale + fade animation */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 z-10"
              aria-label="Close alert"
            >
              <X size={28} />
            </motion.button>

            {/* Image - subtle entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full h-64 relative"
            >
              <img
                src="/images/specials/special.jpg"
                alt="No Waiting Period Special - Sibiya Funeral Services"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-4"
              >
                NO WAITING PERIOD SPECIAL
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              >
                From the 2nd of March 2026 till the 6th of April 2026
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInterested}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all text-lg"
              >
                I'm Interested
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
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