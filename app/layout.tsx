// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sibiya Funeral Services",
  description: "Compassionate & Dignified Funeral Services Since 2008",
  icons: {
    icon: [
      { url: "/images/favicon/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // optional fallback if you add .ico later
    ],
    apple: "/images/favicon/favicon.png", // for iOS home screen
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/images/favicon/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon/favicon.png" />
        {/* Optional: add more sizes later */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" /> */}

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