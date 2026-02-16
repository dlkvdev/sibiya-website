"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, MapPin, HeartHandshake, Trophy } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen about-page">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero / Intro */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t("aboutUs")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("slogan")} – {t("heroSubtitle")}
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            {t("ourStory")}
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              Founded in 2008 by Mr. Vusi Sibiya, Sibiya Funeral Services began as a small family-run business in Pietermaritzburg with a simple mission: to provide compassionate, dignified, and affordable funeral services to communities across KwaZulu-Natal.
            </p>
            <p className="mb-6">
              From our humble beginnings with just one branch, we have grown to over 30 locations, serving thousands of families with care and respect during their most difficult times.
            </p>
            <p className="font-semibold">
              Today, we continue to honor our roots while embracing innovation to better serve you.
            </p>
          </div>
        </motion.section>

        {/* Our Growth & Reach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Our Growth & Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-500 text-center transform hover:scale-105 transition-transform duration-300">
              <Calendar className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Since 2008</h3>
              <p className="text-gray-600 dark:text-gray-400">Years of dedicated service</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-500 text-center transform hover:scale-105 transition-transform duration-300">
              <MapPin className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">30+ Branches</h3>
              <p className="text-gray-600 dark:text-gray-400">Across KwaZulu-Natal & Johannesburg</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-500 text-center transform hover:scale-105 transition-transform duration-300">
              <HeartHandshake className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Thousands Served</h3>
              <p className="text-gray-600 dark:text-gray-400">Families with dignity and care</p>
            </div>
          </div>
        </motion.section>

        {/* Founder Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Founder Recognition
          </h2>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border-2 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Mr. Vusi Sibiya
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Mr. Vusi Sibiya has been recognized for his dedication to dignified funeral services, receiving awards including the Lifetime Achievement and Best Business Leader honors in recent years.
            </p>
            <blockquote className="italic border-l-4 border-green-500 pl-4 text-gray-700 dark:text-gray-300">
              "We treat every family as our own, because in times of loss, compassion matters most."
            </blockquote>
          </div>
        </motion.section>

        {/* Our Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Our Core Values
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              At Sibiya Funeral Services, we believe that every farewell should be handled with the utmost dignity, compassion, and respect for cultural traditions.
            </p>
            <p className="mb-6">
              We are committed to affordability without compromising quality, 24/7 availability, and personalized support that allows families to grieve in peace.
            </p>
            <p className="font-semibold">
              Because your family is our family.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}