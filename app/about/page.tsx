"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 border-2 border-green-500 rounded-2xl p-8 bg-transparent"
        >
          <h2 className="text-3xl font-bold mb-8">
            {t("ourStory")}
          </h2>
          <div className="text-lg leading-relaxed opacity-90">
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

        {/* Founder Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 border-2 border-green-500 rounded-2xl p-8 bg-transparent"
        >
          <h2 className="text-3xl font-bold mb-8">
            Founder Recognition
          </h2>
          <div className="text-lg leading-relaxed opacity-90">
            <h3 className="text-2xl font-bold mb-4">
              Mr. Vusi Sibiya
            </h3>
            <p className="mb-4">
              Mr. Vusi Sibiya has been recognized for his dedication to dignified funeral services, receiving awards including the Lifetime Achievement and Best Business Leader honors in recent years.
            </p>
            <blockquote className="italic border-l-4 border-green-500 pl-4">
              "We treat every family as our own, because in times of loss, compassion matters most."
            </blockquote>
          </div>
        </motion.section>

        {/* Our Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-2 border-green-500 rounded-2xl p-8 bg-transparent"
        >
          <h2 className="text-3xl font-bold mb-8">
            Our Core Values
          </h2>
          <div className="text-lg leading-relaxed opacity-90">
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