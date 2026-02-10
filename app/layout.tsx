// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Poppins } from "next/font/google";

// Keep Poppins with next/font (it works reliably)
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
      <head>
        {/* Playwrite New Zealand Basic - for slogan */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+NZ+Basic&display=swap"
          rel="stylesheet"
        />
        {/* Playwrite India Guides - for hero subtitle */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+IN+Guides&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`
          ${poppins.variable}
          font-sans antialiased min-h-screen
        `}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}