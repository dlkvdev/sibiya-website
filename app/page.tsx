"use client";

import L from 'leaflet';
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  MapPin,
  Trophy,
  HeartHandshake,
  Calendar,
  MessageCircle,
  Facebook,
  Video,
  Phone,
  Mail,
  Car,
  Flower,
  Tent,
  Crosshair,
  Bus,
  ArrowDownCircle,
  Flame,
  Archive,
  Heart,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import QuoteModal from "./components/QuoteModal";
import CoverModal from "./components/CoverModal";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "./components/Footer";
import SpecialAlert from "./components/SpecialAlert";

const heroImages = [
  "/images/carausel/hero-bg0.jpg",
  "/images/carausel/hero-bga.jpg",
  "/images/carausel/hero-bg.png",
  "/images/carausel/hero-bgb.jpg",
  "/images/carausel/hero-bg2.jpg",
  "/images/carausel/hero-bgc.jpg",
  "/images/carausel/hero-bg4.jpg",
  "/images/carausel/hero-bgd.jpg",
  "/images/carausel/hero-bg5.jpg",
  "/images/carausel/hero-bge.jpg",
  "/images/carausel/hero-bg6.jpg",
  "/images/carausel/hero-bg7.jpg",
  "/images/carausel/hero-bg8.jpg",
  "/images/carausel/hero-bg9.jpg",
  "/images/carausel/hero-bg10.jpg",
  "/images/carausel/hero-bg11.jpg",
];

const testimonials = [
  {
    name: "Nomfundo Manzi.",
    location: "Durban",
    date: "December 2025",
    quote: "Sibiya took care of everything with such compassion and respect. We felt supported every step of the way during a very difficult time.",
    avatar: "/images/testimonials/human1.png",
  },
  {
    name: "Thabo Khumalo.",
    location: "Pietermaritzburg",
    date: "November 2025",
    quote: "Professional, affordable, and very understanding of our cultural needs. The service was dignified and beautifully arranged.",
    avatar: "/images/testimonials/human4.png",
  },
  {
    name: "Zanele Nene.",
    location: "Greytown",
    date: "October 2025",
    quote: "From the first call to the final farewell, the team was exceptional. Thank you for honoring our loved one so well.",
    avatar: "/images/testimonials/human2.png",
  },
  {
    name: "Sibusiso Dube.",
    location: "Johannesburg",
    date: "September 2025",
    quote: "Quick response, clear communication, and genuine care. We highly recommend Sibiya Funeral Services.",
    avatar: "/images/testimonials/human4.png",
  },
  {
    name: "Zanele Ndlela.",
    location: "Greytown",
    date: "October 2025",
    quote: "From the first call to the final farewell, the team was exceptional. Thank you for honoring our loved one so well.",
    avatar: "/images/testimonials/human2.png",
  },
  {
    name: "Sipho Mtshali.",
    location: "Swayimane",
    date: "January 2026",
    quote: "They handled everything with dignity and care. Even the small details were taken care of, which meant a lot to our family during such a painful time.",
    avatar: "/images/testimonials/human4.png",
  },
  {
    name: "Lindiwe Khuzwayo.",
    location: "Pietermaritzburg",
    date: "November 2025",
    quote: "Very professional yet so compassionate. They respected our traditions perfectly and made sure we could focus on grieving rather than logistics.",
    avatar: "/images/testimonials/human1.png",
  },
  {
    name: "Vusi Dladla",
    location: "Pietermaritzburg",
    date: "December 2025",
    quote: "Affordable without ever feeling cheap. The service was beautiful and the staff were patient and kind every step of the way.",
    avatar: "/images/testimonials/human3.png",
  },
  {
    name: "Nokuthula Shabalala.",
    location: "Hammarsdale",
    date: "February 2026",
    quote: "They went above and beyond, especially with transport and paperwork. We felt truly supported as a family — thank you from the bottom of our hearts.",
    avatar: "/images/testimonials/human2.png",
  },
  {
    name: "Mandla Ngubane.",
    location: "Mpophomeni",
    date: "October 2025",
    quote: "Quick response at 2 a.m. when we needed help most. The team was calm, respectful, and made a heartbreaking situation much more bearable.",
    avatar: "/images/testimonials/human4.png",
  },
  {
    name: "Thembi Ndlovu.",
    location: "Pietermaritzburg",
    date: "January 2026",
    quote: "Everything was handled with such grace and cultural understanding. We will always be grateful for the peace they brought to our family.",
    avatar: "/images/testimonials/human1.png",
  },
  {
    name: "Jabulani Dlamini",
    location: "Escourt",
    date: "September 2025",
    quote: "Reliable, caring, and reasonably priced. They made us feel like family during one of the hardest moments of our lives.",
    avatar: "/images/testimonials/human3.png",
  },
];

const covers = [
  {
    id: "A",
    title: "Cover A",
    subtitle: "Coffin",
    tagline: "Essential Dignity for Traditional Farewells",
    price: "R320",
    image: "/images/products/coffin1.jpg",
    benefits: [
      { item: "Coffin", icon: <ArrowDownCircle size={20} /> },
      { item: "Hearse", icon: <Car size={20} /> },
      { item: "Cross", icon: <Crosshair size={20} /> },
      { item: "2 Pole Tents", icon: <Tent size={20} /> },
      { item: "Table & Chairs", icon: <Mail size={20} /> },
      { item: "Fresh Flowers", icon: <Flower size={20} /> },
    ],
  },
  {
    id: "B",
    title: "Cover B",
    subtitle: "Casket",
    tagline: "Enhanced Comfort and Respect",
    price: "R390",
    image: "/images/products/casket2.jpeg",
    benefits: [
      { item: "Casket", icon: <ArrowDownCircle size={20} /> },
      { item: "Hearse", icon: <Car size={20} /> },
      { item: "Family Car", icon: <Car size={20} /> },
      { item: "Cross", icon: <Crosshair size={20} /> },
      { item: "2 Pole Tents", icon: <Tent size={20} /> },
      { item: "Table & Chairs", icon: <Mail size={20} /> },
      { item: "Lowering Device", icon: <ArrowDownCircle size={20} /> },
      { item: "Fresh Flowers", icon: <Flower size={20} /> },
      { item: "Bus", icon: <Bus size={20} /> },
    ],
  },
  {
    id: "C",
    title: "Cover C",
    subtitle: "Uhlelo Lwamanazaretha",
    tagline: "Culturally Honored Traditions",
    price: "R340",
    image: "/images/products/nazareth4.jpg",
    benefits: [
      { item: "Uhlaka", icon: <ArrowDownCircle size={20} /> },
      { item: "Hearse", icon: <Car size={20} /> },
      { item: "Family Car", icon: <Car size={20} /> },
      { item: "Cross", icon: <Crosshair size={20} /> },
      { item: "2 Pole Tents", icon: <Tent size={20} /> },
      { item: "Table & Chairs", icon: <Mail size={20} /> },
      { item: "Lowering Device", icon: <ArrowDownCircle size={20} /> },
      { item: "Fresh Flowers", icon: <Flower size={20} /> },
      { item: "Bus", icon: <Bus size={20} /> },
    ],
  },
  {
    id: "D",
    title: "Cover D",
    subtitle: "Cremation",
    tagline: "Simple, Dignified, and Modern Farewell",
    price: "R420",
    image: "/images/products/urn3.jpg",
    benefits: [
      { item: "Cremation Service", icon: <Flame size={20} /> },
      { item: "Hearse", icon: <Car size={20} /> },
      { item: "Urn", icon: <Archive size={20} /> },
      { item: "Basic Memorial", icon: <Heart size={20} /> },
    ],
  },
];

export default function Home() {
  const { t } = useLanguage();

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [startCounting, setStartCounting] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCover, setSelectedCover] = useState<any>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main>
      <SpecialAlert />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt={`Hero background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          ))}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="font-['Playwrite_NZ_Basic'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-6 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("slogan")}
          </motion.h1>
          <motion.p
            className="font-['Playwrite_IN_Guides'] text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("heroSubtitle")}
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 flex-wrap">
            <a
              href="https://wa.me/27727001800"
              className="bg-transparent hover:bg-red-600 text-white font-semibold py-2 px-6 text-sm md:py-3 md:px-8 md:text-base rounded-xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 border border-red-600 hover:border-red-600"
            >
              <MessageCircle size={20} />
              {t("emergency")}
            </a>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-transparent hover:bg-green-600 text-white font-semibold py-2 px-6 text-sm md:py-3 md:px-8 md:text-base rounded-xl shadow-xl transition-all duration-300 hover:scale-105 border border-green-600 hover:border-green-600"
            >
              {t("talkToUs")}
            </button>
          </div>

          {/* Animated scroll-down arrow */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              <ArrowDownCircle
                size={48}
                className="text-white drop-shadow-xl hover:text-green-400 transition-colors"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legacy of Compassion Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("legacyTitle")}
          </motion.h2>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <MapPin className="w-16 h-16 text-blue-900 dark:text-blue-300 mx-auto mb-6" />
              <CountUp
                start={startCounting ? 0 : undefined}
                end={30}
                duration={2.5}
                suffix="+"
                className="text-5xl font-bold text-blue-900 dark:text-blue-300 block mb-2"
              />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{t("branches")}</p>
            </motion.div>

            {/* Years */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <CountUp
                start={startCounting ? 0 : undefined}
                end={18}
                duration={2.5}
                className="text-5xl font-bold text-blue-900 dark:text-blue-300 block mb-2"
              />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{t("years")}</p>
            </motion.div>

            {/* Families Served */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <HeartHandshake className="w-16 h-16 text-green-600 dark:text-green-300 mx-auto mb-6" />
              <CountUp
                start={startCounting ? 0 : undefined}
                end={50000}
                duration={2.5}
                separator=","
                suffix="+"
                className="text-5xl font-bold text-blue-900 dark:text-blue-300 block mb-2"
              />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{t("families")}</p>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <Calendar className="w-16 h-16 text-red-600 dark:text-red-300 mx-auto mb-6" />
              <p className="text-5xl font-bold text-blue-900 dark:text-blue-300 block mb-2">24/7</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{t("support")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Covers Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
            {t("coversTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            {t("coversSubtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {covers.map((cover) => (
              <motion.div
                key={cover.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedCover(cover)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cover.image}
                    alt={`${cover.title} - ${cover.subtitle}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-900 dark:bg-blue-700 text-white px-4 py-2 rounded-full font-bold">
                    {t("fromPrice", { price: cover.price })}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {cover.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{cover.subtitle}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 italic">
                    {cover.tagline}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {cover.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        {benefit.icon}
                        {benefit.item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
                    {t("seeMore")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
              {t("benefitsTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Free Grocery Hamper */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img
                  src="/images/benefits/groceries.png"
                  alt="Free grocery hamper delivered before the funeral"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Free Grocery Hamper
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Essential groceries delivered to the family prior to the funeral day
                </p>
              </div>

              {/* Urban Burial Support */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img
                  src="/images/benefits/bus.jpg"
                  alt="64-seater bus for urban funeral transport"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Urban Burial Support (Selected Areas)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  R1,000 cash + burial site + 64-seater bus <br />
                  <span className="font-medium">Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale only</span>
                </p>
              </div>

              {/* Rural Homestead Burial Cash */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img
                  src="/images/benefits/cash3.jpg"
                  alt="Grave preparation at rural homestead"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Rural Homestead Burial Cash
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  R2,000 cash to the policy holder <br />
                  <span className="font-medium">Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale only</span>
                </p>
              </div>

              {/* Free Repatriation */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="text-blue-900 dark:text-blue-300 mb-4">
                  <Car size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Free Repatriation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">From Gauteng to KZN</p>
              </div>

              {/* Combined Durban/Pinetown/Empangeni benefit */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="text-blue-900 dark:text-blue-300 mb-4">
                  <HeartHandshake size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Burial Support – Durban, Pinetown & Empangeni
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <strong>Home burial:</strong> R2,000 cash to the policy holder<br />
                  <strong>Urban cemetery (municipality):</strong> R4,000 cash for grave hole + 64-seater bus<br />
                  <span className="font-medium">Applies to Durban, Pinetown & Empangeni only</span>
                </p>
              </div>

              {/* Post-Mortem Fees Covered */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="text-blue-900 dark:text-blue-300 mb-4">
                  <HeartHandshake size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Post-Mortem Fees Covered
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Doctor's post-mortem fees covered if the member passes at home <br />
                  <span className="font-medium">All areas</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-16">
            {t("testimonialsTitle")}
          </h2>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex justify-center items-center"
              >
                <div className="w-full max-w-2xl bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={`${testimonials[currentTestimonial].name}'s avatar`}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsPaused(true);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "bg-blue-900 dark:bg-blue-300 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t("joinFamilies")}
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white font-semibold py-4 px-12 rounded-xl text-lg shadow-xl transition-all hover:scale-105"
            >
              {t("speakToday")}
            </button>
          </div>
        </div>
      </section>


     {/* Interactive Branches Map – visible on lg+ screens */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Our Branches Across KwaZulu-Natal & Johannesburg
          </h2>
          <div className="h-[700px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700">
            <MapContainer
              center={[-29.6, 30.38]} // Centered on Pietermaritzburg area
              zoom={8}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Head Office - Boom Street (different red icon) */}
              <Marker 
                position={[-29.6006, 30.3794]}
                icon={L.divIcon({
                  className: "custom-marker-head",
                  html: '<div style="background-color:#dc2626;color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;border:3px solid #991b1b;">HQ</div>',
                  iconSize: [32, 32],
                  iconAnchor: [16, 16],
                })}
              >
                <Popup className="custom-popup">
                  <strong>Head Office – Pietermaritzburg Boom Street</strong><br />
                  433 Boom Street, Pietermaritzburg<br />
                  Contact: 081 237 1921
                </Popup>
              </Marker>

              {/* Johannesburg – New Redruth, Alberton */}
              <Marker position={[-26.2670, 28.1220]}>
                <Popup className="custom-popup">
                  <strong>Johannesburg Branch</strong><br />
                  10 Helston Street, New Redruth, Alberton<br />
                  Contact: 072 700 1800 (general)
                </Popup>
              </Marker>

              {/* Newcastle – 2 Ayliff Street */}
              <Marker position={[-27.7580, 29.9315]}>
                <Popup className="custom-popup">
                  <strong>Newcastle Branch</strong><br />
                  2 Ayliff Street, Newcastle<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              {/* All other existing branches – keeping them unchanged */}
              <Marker position={[-29.6021, 30.3805]}>
                <Popup className="custom-popup">
                  <strong>Pietermaritzburg – Langalibalele Shop No 1</strong><br />
                  412 Langalibalele Street, Pietermaritzburg<br />
                  Contact: 081 330 6840
                </Popup>
              </Marker>

              <Marker position={[-29.6025, 30.3810]}>
                <Popup className="custom-popup">
                  <strong>Pietermaritzburg – Langalibalele Shop No 2</strong><br />
                  Shop No 2 Selgro 412 Langalibalele Street, Pietermaritzburg<br />
                  Contact: 033 940 3871
                </Popup>
              </Marker>

              <Marker position={[-30.7414, 30.4550]}>
                <Popup className="custom-popup">
                  <strong>Port Shepstone Branch</strong><br />
                  4 Court House Road, Port Shepstone<br />
                  Contact: 063 292 7628
                </Popup>
              </Marker>

              <Marker position={[-28.7530, 31.8930]}>
                <Popup className="custom-popup">
                  <strong>Empangeni Branch</strong><br />
                  Shop 4 Clan Angus, 4th and 6th Street, Empangeni<br />
                  Contact: 035 787 0106
                </Popup>
              </Marker>

              <Marker position={[-29.1233, 30.5928]}>
                <Popup className="custom-popup">
                  <strong>Greytown Branch</strong><br />
                  Bell Street Ext / Office no 1 & 2, 102 Bell Street, Greytown<br />
                  Contact: 081 586 9800
                </Popup>
              </Marker>

              <Marker position={[-29.4300, 30.5700]}>
                <Popup className="custom-popup">
                  <strong>Wartburg Branch</strong><br />
                  No 7 Mill Road, Wartburg<br />
                  Contact: 081 263 2610
                </Popup>
              </Marker>

              <Marker position={[-29.8000, 29.7670]}>
                <Popup className="custom-popup">
                  <strong>Bulwer Branch</strong><br />
                  Jackson St, Office No 3, Stavcom Centre, Bulwer<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-28.5597, 29.7806]}>
                <Popup className="custom-popup">
                  <strong>Ladysmith Branch</strong><br />
                  26 King St, Ladysmith<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.0383, 29.7800]}>
                <Popup className="custom-popup">
                  <strong>Estcourt Branch</strong><br />
                  35 Market St, Mooi River (Estcourt area)<br />
                  Contact: 036 352 1111
                </Popup>
              </Marker>

              <Marker position={[-29.2082, 29.9946]}>
                <Popup className="custom-popup">
                  <strong>Mooi River Branch</strong><br />
                  35 Market St, Mooi River<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.3709, 30.8800]}>
                <Popup className="custom-popup">
                  <strong>Bhamshela Branch</strong><br />
                  614 No 16 Noodsburg Road, Bhamshela<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.3400, 30.7300]}>
                <Popup className="custom-popup">
                  <strong>Dalton Branch</strong><br />
                  Shop No 2, Market Centre, 4 Noordsberg Road, Dalton<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.8587, 31.0218]}>
                <Popup className="custom-popup">
                  <strong>Durban – Umngeni Branch</strong><br />
                  74 Umngeni Road, Durban<br />
                  Contact: 031 942 5771
                </Popup>
              </Marker>

              <Marker position={[-29.8608, 31.0203]}>
                <Popup className="custom-popup">
                  <strong>Durban – Anton Lembede Branch</strong><br />
                  407 Anton Lembede Rd, Salmon Grove Chamber, Durban<br />
                  Contact: 031 940 0847
                </Popup>
              </Marker>

              <Marker position={[-29.8138, 30.8658]}>
                <Popup className="custom-popup">
                  <strong>Pinetown Branch</strong><br />
                  79 Crompton Rd, Pinetown<br />
                  Contact: 031 094 9414
                </Popup>
              </Marker>

              <Marker position={[-29.7976, 30.6194]}>
                <Popup className="custom-popup">
                  <strong>Webber Branch</strong><br />
                  Shop no 18-19, Webber Shopping Centre<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.7975, 30.6194]}>
                <Popup className="custom-popup">
                  <strong>Hammarsdale Branch</strong><br />
                  Black Properties, Hammarsdale<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.4778, 30.2306]}>
                <Popup className="custom-popup">
                  <strong>Howick Branch</strong><br />
                  27 Somi Street, Howick<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.8720, 30.2724]}>
                <Popup className="custom-popup">
                  <strong>Richmond Branch</strong><br />
                  Chilly Street, Richmond<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

              <Marker position={[-29.6019, 29.8650]}>
                <Popup className="custom-popup">
                  <strong>Impendle – Ikhwezi Street</strong><br />
                  162 Ikhwezi Street, Impendle<br />
                  Contact: (not provided)
                </Popup>
              </Marker>

            </MapContainer>
          </div>
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            20+ branches across KwaZulu-Natal and Johannesburg. Call 072 700 1800 for your nearest location or exact directions.
          </p>
        </div>
      </section>

      {/* Mobile fallback for branches */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800 lg:hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Find Your Nearest Branch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With over 25 branches in KZN and Johannesburg – we're here 24/7.
          </p>
          <a
            href="tel:+27727001800"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-xl transition-all hover:scale-105"
          >
            <Phone size={24} />
            Call 072 700 1800 Now
          </a>
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Full interactive map available on desktop/large screens
          </p>
        </div>
      </section>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {selectedCover && (
        <CoverModal
          isOpen={!!selectedCover}
          onClose={() => setSelectedCover(null)}
          cover={selectedCover}
        />
      )}

      {showFloatingButton && (
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center"
          aria-label="Get a personalized quote"
        >
          <MessageCircle size={28} />
          <span className="sr-only">Get Quote</span>
        </button>
      )}
    </main>
  );
}