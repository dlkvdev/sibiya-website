// app/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Sun, Moon, Facebook, Video, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "branches", href: "/branches" },
  ];

  const t = useLanguage().t;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? "bg-blue-950/95 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 hover:scale-105 transition-transform"
          >
            <img
              src="/images/logos/logo.png"
              alt="Sibiya Funeral Services Logo"
              className="h-14 lg:h-20 xl:h-24 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">
                Sibiya Funeral Services
              </h1>
              <p className="text-xs sm:text-sm text-green-300">Our Family Serving Yours</p>
            </div>
          </Link>

          {/* Desktop nav + toggles + social icons */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav links */}
            <nav className="flex items-center gap-8 text-white font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="hover:text-green-400 transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* Toggles + Social Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-white hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
                aria-label="Toggle language"
              >
                <Globe size={24} />
              </button>
              <button
                onClick={toggleTheme}
                className="text-white hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Social Icons - Desktop */}
              <a
                href="https://www.facebook.com/sibiyafuneralservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@sibiyafuneralservicesofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors p-2"
                aria-label="TikTok"
              >
                <Video size={24} />
              </a>
              <a
                href="https://www.youtube.com/@sibiyafuneralservices" // ← your actual channel
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors p-2"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Mobile: only hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-blue-950/95 backdrop-blur-md flex flex-col overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-blue-800">
              <div className="text-xl font-bold text-white">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-green-400 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="hover:text-green-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* Language & Theme toggles */}
            <div className="px-6 py-6 border-t border-blue-800">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-4 text-lg hover:text-green-400 transition-colors"
                >
                  <Globe size={24} />
                  <span>Language: {language.toUpperCase()}</span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-4 text-lg hover:text-green-400 transition-colors"
                >
                  {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>
            </div>

            {/* Social Icons - Mobile Drawer */}
            <div className="px-6 py-6 border-t border-blue-800">
              <h4 className="text-lg font-semibold mb-4 text-blue-50 text-center sm:text-left">
                Connect With Us
              </h4>
              <div className="flex justify-center sm:justify-start gap-8">
                <a
                  href="https://www.facebook.com/sibiyafuneralservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={32} />
                </a>
                <a
                  href="https://www.tiktok.com/@sibiyafuneralsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label="TikTok"
                >
                  <Video size={32} />
                </a>
                <a
                  href="https://www.youtube.com/@SibiyaFuneralServicesOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label="YouTube"
                >
                  <Youtube size={32} />
                </a>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="mt-auto p-6 border-t border-blue-800 text-sm text-blue-200">
              <p className="font-medium">24/7 Emergency:</p>
              <a href="tel:+27727001800" className="hover:text-green-400 transition">
                072 700 1800
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}