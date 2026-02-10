"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const branches = [
  {
    name: "Pietermaritzburg – Boom Street",
    address: "433 Boom Street, Pietermaritzburg",
    phone: "081 237 1921",
  },
  {
    name: "Pietermaritzburg – Langalibalele Shop No 1",
    address: "412 Langalibalele Street, Pietermaritzburg",
    phone: "081 330 6840",
  },
  {
    name: "Pietermaritzburg – Langalibalele Shop No 2",
    address: "Shop No 2 Selgro 412 Langalibalele Street, Pietermaritzburg",
    phone: "033 940 3871",
  },
  {
    name: "Durban – Umngeni",
    address: "74 Umgeni Road, Durban",
    phone: "031 942 5771",
  },
  {
    name: "Durban – Anton Lembede",
    address: "407 Anton Lembede Rd, Salmon Grove Chamber, Durban",
    phone: "031 940 0847",
  },
  {
    name: "Pinetown",
    address: "79 Crompton Rd, Pinetown",
    phone: "031 094 9414",
  },
  {
    name: "Greytown",
    address: "Bell Street Ext, Greytown",
    phone: "081 586 9800",
  },
  {
    name: "Wartburg",
    address: "No 7 Mill Road, Wartburg",
    phone: "081 263 2610",
  },
  {
    name: "Empangeni",
    address: "Shop 4 Clan Angus, 4th and 6th Street, Empangeni",
    phone: "035 787 0106",
  },
  {
    name: "Port Shepstone",
    address: "4 Court House Road, Port Shepstone",
    phone: "063 292 7628",
  },
  {
    name: "Estcourt",
    address: "116 Phillip St, Estcourt",
    phone: "081 288 7036",
  },
  {
    name: "Richmond",
    address: "Chilly Street, Richmond",
    phone: "033 332 0933",
  },
  {
    name: "Howick",
    address: "27 Somi Street, Howick",
    phone: "074 129 8245",
  },
  {
    name: "Ladysmith",
    address: "26 King St, Ladysmith",
    phone: "036 940 0174",
  },
  {
    name: "Mooi River",
    address: "35 Market St, Mooi River",
    phone: "079 968 2346",
  },
  {
    name: "Dalton",
    address: "Shop No 2, Market Centre, 4 Noordsberg Rd, Dalton",
    phone: "033 501 1210",
  },
  {
    name: "Webber",
    address: "Shop no 18-19, Webber shopping Centre",
    phone: "031 944 4522",
  },
  {
    name: "Johannesburg",
    address: "10 Helston Street, New Redruth, Alberton",
    phone: "072 700 1800",
  },
  // Add any new branches here as needed
];

export default function Branches() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t("branches")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("findNearestBranch")} – We have over 20 branches across KwaZulu-Natal and Johannesburg, ready to assist 24/7.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                {branch.name}
              </h3>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  {branch.address}
                </p>

                {branch.phone && (
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-green-600 dark:text-green-400" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="hover:text-green-600 dark:hover:text-green-400 transition"
                    >
                      {branch.phone}
                    </a>
                  </p>
                )}

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address + ", South Africa")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-2 transition"
                >
                  <ExternalLink size={16} />
                  Get Directions on Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Can't find your area? Call our 24/7 emergency line for assistance.
          </p>
          <a
            href="tel:+27727001800"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-xl transition-all hover:scale-105"
          >
            <Phone size={24} />
            Call 072 700 1800 Now
          </a>
        </div>
      </div>
    </main>
  );
}