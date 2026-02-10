// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen`}
        suppressHydrationWarning // ← This removes the hydration warning from extensions like Grammarly
      >
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="min-h-[calc(100vh-4rem)]"> {/* Ensures main content takes available space */}
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}