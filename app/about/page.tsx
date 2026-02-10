"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, MapPin, HeartHandshake, Trophy } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen">
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
            Our Family Serving Yours – A Legacy of Compassion, Dignity, and Care Since 2008
          </p>
        </motion.section>

        {/* History & Founder */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Sibiya Funeral Services was established in 2008 by the visionary founder, Mr. Vusi Sibiya. Starting humbly with the first office in Greytown, followed quickly by Wartburg, the company was built on a deep commitment to providing dignified, compassionate, and affordable funeral services rooted in cultural respect and family values.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                From these small beginnings in the heart of KwaZulu-Natal, Sibiya Funeral Services has grown steadily into one of the most trusted names in the industry. Today, we proudly serve families across the province with more than 21 branches (with recent expansions reaching up to 29 in KZN and 1 in Johannesburg).
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission remains unchanged: to support grieving families with empathy, professionalism, and personalized care, allowing them to focus on honoring their loved ones rather than worrying about logistics.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
                <Trophy className="text-blue-600 dark:text-blue-400" size={32} />
                Founder Recognition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mr. Vusi Sibiya has been recognized for his dedication to dignified funeral services, receiving awards including the Lifetime Achievement and Best Business Leader honors in recent years.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "We treat every family as our own, because in times of loss, compassion matters most."
              </p>
            </div>
          </div>
        </motion.section>

        {/* Growth & Reach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Our Growth & Reach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
              <Calendar className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Since 2008</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Over 17 years of dedicated, trusted service to families in KwaZulu-Natal and beyond.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
              <MapPin className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">30+ Branches</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Extensive network across KZN Midlands, Durban metro, northern KZN, and Johannesburg.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
              <HeartHandshake className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Thousands Served</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Supporting countless families with empathy, respect, and cultural sensitivity during their most difficult times.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values / Closing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
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