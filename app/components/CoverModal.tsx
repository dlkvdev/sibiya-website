"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface CoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  cover: any; // From covers array
}

export default function CoverModal({ isOpen, onClose, cover }: CoverModalProps) {
  if (!isOpen) return null;

  const handleSelect = () => {
    const whatsappMessage = encodeURIComponent(
      `Hi Sibiya Team,\n\nI'd like to select ${cover.title} - ${cover.subtitle}.\nCan you guide me through the next steps?\n\nThank you.`
    );
    window.open(`https://wa.me/27781977630?text=${whatsappMessage}`, "_blank");
    onClose();
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition z-10"
        >
          <X size={24} />
        </button>

        {/* Header with logo */}
        <div className="bg-blue-950 text-white px-8 py-8 text-center relative">
          <img
            src="/images/logos/logo.png"
            alt="Sibiya Funeral Services Logo"
            className="h-20 mx-auto mb-4 object-contain drop-shadow-md"
          />
          <h3 className="text-2xl font-bold">{cover.title} - {cover.subtitle}</h3>
          <p className="text-white/80 mt-2 text-sm">
            {cover.tagline} | Personalized with Care
          </p>
        </div>

        {/* Benefits List */}
        <div className="p-8 space-y-6">
          <h4 className="text-xl font-semibold text-blue-900 text-center">Included Benefits</h4>
          <ul className="space-y-4">
            {cover.benefits.map((benefit: any, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-blue-600">{benefit.icon}</span>
                {benefit.item}
              </motion.li>
            ))}
          </ul>

          <button
            onClick={handleSelect}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Select This Cover
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Plus all additional benefits like free repatriation. We'll confirm details via WhatsApp.
          </p>
        </div>
      </div>
    </motion.div>
  );
}