"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ExternalLink, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

interface Branch {
  name: string;
  address: string;
  phone: string;
  mapsLink?: string;
  note?: string;
}

const branches: Branch[] = [
  {
    name: "Pietermaritzburg (Head Office) – Boom Street",
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
    address: "27 Somi Street, Howick",
    phone: "Not listed – call 072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=27+Somi+Street,+Howick,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Estcourt – Phillips Street",
    address: "118 Phillips Street, Estcourt",
    phone: "036 940 0551",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=118+Phillips+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Estcourt – Lorne Street",
    address: "107 Lorne Street, Estcourt",
    phone: "036 940 0853",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=107+Lorne+Street,+Estcourt,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Mooi River – Stock Lane",
    address: "01 Stock lane, Mooi River",
    phone: "031 944 4522",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=01+Stock+lane,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Mooi River – York Terrace",
    address: "35 York Terrace, Mooi River",
    phone: "033 940 3778",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=35+York+Terrace,+Mooi+River,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Hammarsdale",
    address: "176 Kunene Road, Hammarsdale",
    phone: "033 940 3789",
    note: "Ku GoSlow wakwaMcoyi",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=176+Kunene+Road,+Hammarsdale,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Pinetown – Joshua Gumede Road",
    address: "05 Joshua Gumede Road, Pinetown",
    phone: "031 940 5414",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=05+Joshua+Gumede+Road,+Pinetown,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Empangeni",
    address: "King Cetshwayo Highway, Empangeni",
    phone: "035 940 0310",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=King+Cetshwayo+Highway,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Johannesburg – New Redruth, Alberton",
    address: "10 Helston Street, New Redruth, Alberton",
    phone: "010 442 4431",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=10+Helston+Street,+New+Redruth,+Alberton,+Gauteng,+South+Africa&travelmode=driving",
  },
  {
    name: "Newcastle",
    address: "2 Ayliff Street, Newcastle",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=2+Ayliff+Street,+Newcastle,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Port Shepstone",
    address: "11 Robinson Street, Port Shepstone",
    phone: "033 307 0143 / 039 940 2467",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=11+Robinson+Street,+Port+Shepstone,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Empangeni – Clan Angus",
    address: "Shop 4 Clan Angus, 4th and 6th Street, Empangeni",
    phone: "035 787 0106",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+4+Clan+Angus,+4th+and+6th+Street,+Empangeni,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Greytown – Bell Street",
    address: "Bell Street Ext / Office no 1 & 2, 102 Bell Street, Greytown",
    phone: "081 586 9800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=102+Bell+Street,+Greytown,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Greytown – Maitland Road",
    address: "65 Maitland Road, Greytown",
    phone: "081 586 9800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=65+Maitland+Road,+Greytown,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Wartburg – Noordsburg Road",
    address: "36 Noordsburg Road, Wartburg",
    phone: "033 307 0116",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=36+Noordsburg+Road,+Wartburg,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Wartburg – Mill Road",
    address: "10 Mill Road, Wartburg",
    phone: "033 307 0116",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=10+Mill+Road,+Wartburg,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Bulwer",
    address: "Jackson St, Office No 3, Stavcom Centre, Bulwer",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Stavcom+Centre,+Jackson+Street,+Bulwer,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Ladysmith",
    address: "26 King Street, Ladysmith",
    phone: "081 386 0388",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=26+King+Street,+Ladysmith,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Bhamshela",
    address: "614 No 16 Noodsburg Road, Bhamshela",
    phone: "033 940 3668",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=614+No+16+Noodsburg+Road,+Bhamshela,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Dalton",
    address: "No 02 Old Main road, Dalton",
    phone: "033 940 3780",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=No+02+Old+Main+road,+Dalton,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Monty Naicker Road",
    address: "260 Monty Naicker Road, Durban Central, Durban",
    phone: "031 942 5771",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=260+Monty+Naicker+Road,+Durban+Central,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Anton Lembede",
    address: "407 Anton Lembede Rd, Salmon Grove Chamber, Durban",
    phone: "031 940 0847",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=407+Anton+Lembede+Road,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Lennox Road",
    address: "16-18 Lennox Road, Windermere Berea, Durban",
    phone: "031 940 0847",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=16-18+Lennox+Road,+Windermere+Berea,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Durban – Ellof & Kerk Street",
    address: "Corner of Ellof & Kerk Street, Durban",
    phone: "072 700 1800",
    note: "Next to Mr Price",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Corner+of+Ellof+Street+and+Kerk+Street,+Durban,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Webber",
    address: "Shop no 18-19, Webber Shopping Centre",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Webber+Shopping+Centre,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Richmond",
    address: "15 Chilli Street, Richmond",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=15+Chilli+Street,+Richmond,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Impendle – Ikhwezi Street",
    address: "162 Ikhwezi Street, Impendle",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=162+Ikhwezi+Street,+Impendle,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Ixopo",
    address: "15 Margaret Street, Ixopo",
    phone: "076 076 9075",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=15+Margaret+Street,+Ixopo,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "KwaMashu",
    address: "2 Hunslet Road, KwaBester, KwaMashu",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=2+Hunslet+Road,+KwaBester,+KwaMashu,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Stanger",
    address: "20 Hullet Street, Sky Plaza, Stanger",
    phone: "031 942 5770",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=20+Hullet+Street,+Sky+Plaza,+Stanger,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Tongaat",
    address: "Shop 314 Hijaz AZ Centre, 06 Main Road, Tongaat",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+314+Hijaz+AZ+Centre,+06+Main+Road,+Tongaat,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Richards Bay",
    address: "21 Bullion BLVD, Richards Bay",
    phone: "072 700 1800",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=21+Bullion+BLVD,+Richards+Bay,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Isipingo",
    address: "204 Redbro Centre, Isipingo",
    phone: "031 942 5777",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=204+Redbro+Centre,+Isipingo,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Verulam",
    address: "26 Ricland Street, 22 A Shop, Checkrite Parking, Verulam",
    phone: "065 912 1736 / 071 401 6988",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=26+Ricland+Street,+Verulam,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Ulundi",
    address: "Unit 14, Fairbreeze Office Park, 481 Princess Magogo Street, Ulundi",
    phone: "035 940 0311",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Unit+14+Fairbreeze+Office+Park,+481+Princess+Magogo+Street,+Ulundi,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Isipingo – Phila Ndwandwe Road",
    address: "124 Phila Ndwandwe Road, Shop 12 Near CheckSave Supermarket, Isipingo",
    phone: "031 942 5777",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=124+Phila+Ndwandwe+Road,+Shop+12,+Isipingo,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
  {
    name: "Newcastle – Voortrekker Street",
    address: "Shop No5, Voortrekker Street, Opposite KwaMata Building, Newcastle",
    phone: "034 940 2940",
    note: "Phambi kwase Renk enkulu",
    mapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=Shop+No5+Voortrekker+Street,+Newcastle,+KwaZulu-Natal,+South+Africa&travelmode=driving",
  },
];

export default function Branches() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          {t("branches")}
        </motion.h1>

        {/* Search Field */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by town, address or office name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-5 pl-12 bg-slate-800 border border-green-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition"
            />
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
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
              {branch.note && (
                <p className="text-sm text-yellow-400 mb-4 italic">{branch.note}</p>
              )}
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

        {filteredBranches.length === 0 && searchTerm && (
          <p className="text-center text-xl mt-10 opacity-80">
            No offices found matching "{searchTerm}". Try another search or call our emergency line.
          </p>
        )}

        <div className="text-center mt-16 mb-20">
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