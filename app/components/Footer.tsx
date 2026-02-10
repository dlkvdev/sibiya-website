// app/components/Footer.tsx
import Link from "next/link";
import { MessageCircle, Phone, Mail, Facebook, Video, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-blue-950/90 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Company info */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <img
                src="/images/logos/logo.png"
                alt="Sibiya Funeral Services Logo"
                className="h-14 lg:h-20 xl:h-24 w-auto object-contain"  // ← same small size on mobile, larger on desktop
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Sibiya Funeral Services</h3>
                <p className="text-sm text-blue-200 mt-1">Our Family Serving Yours</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
              Since 2008, providing compassionate, dignified, and affordable funeral services across KwaZulu-Natal and Johannesburg. 30+ branches, 24/7 support, and personalized care for every family.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-blue-50">Quick Links</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-green-400 transition">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-green-400 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-green-400 transition">
                  Branches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-blue-50">Contact Us</h4>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <MessageCircle className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/27727001800" className="hover:text-green-400 transition">
                    WhatsApp: 072 700 1800
                  </a>
                  <p className="text-xs text-blue-300">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+27333320933" className="hover:text-green-400 transition">
                  033 332 0933
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href="mailto:info@sibiyafuneralservices.co.za"
                  className="hover:text-green-400 transition break-all"
                >
                  info@sibiyafuneralservices.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Reach */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-5 text-blue-50">Connect With Us</h4>
            <div className="flex justify-center sm:justify-start gap-6 mb-8">
              <a
                href="https://www.facebook.com/sibiyafuneralservices"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@sibiyafuneralservicesofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                aria-label="TikTok"
              >
                <Video className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@sibiyafuneralservices"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-blue-50">Our Reach</h4>
            <p className="text-blue-100 text-sm mb-2">
              30+ branches across KwaZulu-Natal and Johannesburg
            </p>
            <p className="text-xs text-blue-300">
              Find your nearest branch or call us anytime.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Sibiya Funeral Services. All rights reserved.</p>
          <p className="mt-2">
            Committed to dignity, respect, and compassionate service.
            <Link href="/privacy" className="hover:text-green-400 ml-2 transition">
              Privacy Policy
            </Link>
          </p>
          <p className="mt-4 text-xs text-blue-300 dark:text-blue-200">
            Website designed & developed by{" "}
            <a
              href="https://martinmngadi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition underline underline-offset-2"
            >
              DLKV
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}