// app/payments/page.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Construction } from "lucide-react";

export default function Payments() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen payments-page">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t("payOnline")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            This section is currently under development. Soon you'll be able to manage your policies and make secure online payments here.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-green-500 flex flex-col items-center gap-6"
        >
          <Construction size={80} className="text-blue-600 dark:text-blue-400" />
          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
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