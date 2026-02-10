// app/components/QuoteModal.tsx
"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Burial",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `Hi Sibiya Funeral Services,\n\n` +
      `Name: ${formData.name}\n` +
      `Phone/WhatsApp: ${formData.phone}\n` +
      `Service needed: ${formData.service}\n` +
      `Additional info: ${formData.message || "None"}\n\n` +
      `Looking forward to your assistance.`
    );

    window.open(`https://wa.me/27727001800?text=${whatsappMessage}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition z-10"
        >
          <X size={24} />
        </button>

        {/* Header with logo */}
        <div className="bg-blue-950 text-white px-8 py-8 text-center relative">
          {/* Company logo */}
          <img
            src="/images/logos/logo.png"
            alt="Sibiya Funeral Services Logo"
            className="h-20 md:h-24 w-auto mx-auto mb-4 object-contain drop-shadow-md"
          />
          <h3 className="text-2xl md:text-3xl font-bold">Get Your Personalized Quote</h3>
          <p className="text-white/80 mt-2 text-sm md:text-base">
            We'll respond quickly via WhatsApp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="+27 ..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Type *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="Burial">Burial</option>
              <option value="Cremation">Cremation</option>
              <option value="Funeral Cover">Funeral Cover / Plan</option>
              <option value="Other">Other (please specify below)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Family size, preferred date, budget range, special requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Send via WhatsApp
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Your information is handled with care and confidentiality.
          </p>
        </form>
      </div>
    </div>
  );
}