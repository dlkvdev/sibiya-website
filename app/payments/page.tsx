"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Construction } from "lucide-react";

export default function Payments() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl shadow-xl border-2 border-green-500 flex flex-col items-center gap-6 bg-transparent"
        >
          <Construction size={80} className="text-blue-400" />
          <p className="text-lg font-semibold">
            Coming Soon! Stay tuned for updates.
          </p>
          <a
            href="https://wa.me/27727001800"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-xl transition-all hover:scale-105"
          >
            Contact Us for More Info
          </a>
        </motion.div>
      </div>
    </main>
  );
}