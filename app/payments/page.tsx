"use client";

import { motion } from "framer-motion";
import { Phone, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import jsPDF from "jspdf";
import Footer from "../components/Footer";

export default function Payments() {
  const { t } = useLanguage();

  const bankingDetails = [
    {
      bank: "Standard Bank",
      account: "052292541",
      branch: "051001",
      logo: "/images/banks/std.png",
    },
    {
      bank: "First National Bank (FNB)",
      account: "62195435625",
      branch: "250655",
      logo: "/images/banks/fnb.png",
    },
    {
      bank: "Absa Bank",
      account: "4113729185",
      branch: "632005",
      logo: "/images/banks/absa.png",
    },
  ];

  const handleDownloadPDF = async () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const centerX = pageWidth / 2;
    let y = margin;

    // Helper to load image
    const loadImage = (path: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Image load failed: ${path}`));
        img.src = path;
      });

    // 1. Company Logo + Name
    try {
      const logoImg = await loadImage("/images/sibiya-logo.png");
      const logoWidth = 60;
      const logoHeight = (logoImg.height / logoImg.width) * logoWidth;
      doc.addImage(logoImg, "PNG", centerX - logoWidth / 2, y, logoWidth, logoHeight);
      y += logoHeight + 8;
    } catch (err) {
      console.warn("Sibiya logo failed to load", err);
      y += 5;
    }

    // Company name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(0, 100, 0);
    doc.text("SIBIYA FUNERALS SERVICES", centerX, y, { align: "center" });
    y += 10;

    // Tagline
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text("Funeral Services • Pietermaritzburg • KwaZulu-Natal", centerX, y, {
      align: "center",
    });
    y += 14;

    // Decorative line
    doc.setLineWidth(0.7);
    doc.setDrawColor(0, 128, 0);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;

    // 2. Section Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Banking / Payment Details", centerX, y, { align: "center" });
    y += 12;

    // Light underline
    doc.setLineWidth(0.4);
    doc.setDrawColor(150);
    doc.line(centerX - 40, y, centerX + 40, y);
    y += 14;

    // 3. Bank blocks
    for (const bank of bankingDetails) {
      // Bank logo
      try {
        const bankImg = await loadImage(bank.logo);
        doc.addImage(bankImg, "PNG", margin, y - 3, 32, 32);
      } catch (err) {
        console.warn(`${bank.bank} logo failed`, err);
        doc.setFontSize(9);
        doc.setTextColor(180);
        doc.text("[LOGO]", margin + 8, y + 18);
      }

      // Bank name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(0, 0, 0);
      doc.text(bank.bank, margin + 40, y + 10);

      // Details
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(40, 40, 40);
      doc.text(`Account: ${bank.account}`, margin + 40, y + 20);
      doc.text(`Branch Code: ${bank.branch}`, margin + 40, y + 28);

      // Separator
      y += 38;
      doc.setLineWidth(0.25);
      doc.setDrawColor(220, 220, 220);
      doc.line(margin, y, pageWidth - margin, y);
      y += 12;

      // Page break prevention
      if (y > pageHeight - 40) {
        doc.addPage();
        y = margin + 10;
      }
    }

    // 4. Footer
    y = pageHeight - 30;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("For payment confirmation or inquiries:", centerX, y, { align: "center" });
    y += 6;
    doc.setFontSize(11);
    doc.setTextColor(0, 100, 0);
    doc.text("Call / WhatsApp: 072 700 1800 (24/7)", centerX, y, { align: "center" });
    y += 6;
    doc.setFontSize(9);
    doc.text("Thank you for choosing Sibiya Funerals Services", centerX, y, {
      align: "center",
    });

    doc.save("Sibiya-Funerals-Banking-Details.pdf");
  };

  return (
    <main className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400"
        >
          {t("payments") || "Payments & Banking Details"}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {bankingDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-700/30 hover:border-green-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="h-20 mb-6 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={detail.logo}
                  alt={`${detail.bank} logo`}
                  className="max-h-full object-contain drop-shadow-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/180x80?text=" + detail.bank;
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-green-300">{detail.bank}</h3>
              <div className="space-y-2 text-gray-200">
                <p>
                  Account: <span className="font-semibold text-white">{detail.account}</span>
                </p>
                <p>
                  Branch Code: <span className="font-semibold text-white">{detail.branch}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Use the details above to make payments securely. For confirmation,
            questions or assistance please contact us.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/27727001800"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl text-lg shadow-lg transition-all hover:scale-105 active:scale-95 min-w-[240px]"
            >
              <Phone size={26} />
              Contact Us
            </a>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-12 rounded-xl text-lg shadow-lg transition-all hover:scale-105 active:scale-95 min-w-[240px]"
            >
              <Download size={26} />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}