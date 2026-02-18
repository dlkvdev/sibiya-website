"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";

interface JoiningRequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoiningRequirementsModal({
  isOpen,
  onClose,
}: JoiningRequirementsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 text-white overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        {/* Logo – replace src with your actual logo */}
        <img
          src="/images/logos/logo.png"
          alt="Sibiya Funeral Services Logo"
          className="w-28 h-auto mx-auto mb-6 rounded-lg shadow-md"
        />

        <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
          Join Sibiya Funeral Services
        </h2>

        <p className="text-center text-lg mb-8 opacity-90">
          Simple, affordable, and dignified funeral cover for your family
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-300">
            What we need from you to get started:
          </h3>

          <ul className="space-y-3 text-left text-base opacity-90 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>Name and Surname</strong> (main policy holder)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>ID Number</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>Residential Address</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>Cell Number</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>Email Address</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span><strong>Required Cover Type</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>
                <strong>List of Family Members</strong> to be covered (including their full names and ID numbers)
              </span>
            </li>
          </ul>

          <div className="bg-slate-800/60 p-5 rounded-xl border border-green-500/30 text-left text-sm opacity-90">
            <p className="font-medium text-green-300 mb-3">Important cover details:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each policy covers up to <strong>10 members</strong> (including the main policy holder)</li>
              <li>Additional members beyond 10 are welcome and will be charged at <strong>R30 per person</strong></li>
              <li>There are <strong>no age restrictions</strong> — all family members are welcome</li>
              <li>Different surnames among covered members are <strong>perfectly acceptable</strong></li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/27727001800?text=Hi%20Sibiya%20Funeral%20Services%2C%20I'm%20interested%20in%20joining.%20Here%20is%20my%20information%3A%0A%0AName%20%26%20Surname%3A%20%0AID%20Number%3A%20%0AResidential%20Address%3A%20%0ACell%20Number%3A%20%0AEmail%20Address%3A%20%0ACover%20Type%3A%20%0AList%20of%20Family%20Members%20%26%20their%20IDs%3A%20%0A%0AThank%20you!"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-all hover:scale-105 text-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Send Your Details on WhatsApp
          </a>
        </div>

        <p className="mt-8 text-sm opacity-70 text-center">
          We'll respond quickly and guide you through the next steps.<br />
          Sibiya Funeral Services – Your Family, Our Family
        </p>
      </motion.div>
    </div>
  );
}