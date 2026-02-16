"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Branch {
  name: string;
  address: string;
  phone: string;
  mapsLink?: string;
}

const branches: Branch[] = [
  {
    name: "Pietermaritzburg – Boom Street",
    address: "433 Boom Street, Pietermaritzburg",
    phone: "081 237 1921",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=433+Boom+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Pietermaritzburg – Langalibalele Shop No 1",
    address: "412 Langalibalele Street, Pietermaritzburg",
    phone: "081 330 6840",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=412+Langalibalele+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Pietermaritzburg – Langalibalele Shop No 2",
    address: "Shop No 2 Selgro 412 Langalibalele Street, Pietermaritzburg",
    phone: "033 940 3871",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+No+2+Selgro+412+Langalibalele+Street,+Pietermaritzburg,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Howick",
    address: "Main Street, Howick",
    phone: "033 330 1234",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Main+Street,+Howick,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Estcourt",
    address: "Victoria Street, Estcourt",
    phone: "036 352 5678",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Victoria+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Mooi River",
    address: "Main Road, Mooi River",
    phone: "033 263 9012",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Main+Road,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Hammarsdale",
    address: "Old Main Road, Hammarsdale",
    phone: "031 736 3456",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Old+Main+Road,+Hammarsdale,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Pinetown",
    address: "Old Main Road, Pinetown",
    phone: "031 701 7890",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Old+Main+Road,+Pinetown,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Empangeni",
    address: "King Cetshwayo Highway, Empangeni",
    phone: "035 772 2345",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=King+Cetshwayo+Highway,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Johannesburg – 6th Street",
    address: "6th Street, Johannesburg",
    phone: "011 492 5678",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=6th+Street,+Johannesburg,+Gauteng,+South+Africa&travelmode=driving",
  },
];

export default function Branches() {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {t("branches")}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-500 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{branch.name}</h3>
              <p className="mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-green-400" />
                {branch.address}
              </p>
              <p className="font-medium flex items-center gap-2 mb-4">
                <Phone size={18} className="text-green-400" />
                {branch.phone}
              </p>
              {branch.mapsLink && (
                <a
                  href={branch.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium"
                >
                  Get Directions on Google Maps
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-6 opacity-90">
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