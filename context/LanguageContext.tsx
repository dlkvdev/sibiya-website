// context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zu";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    slogan: "Our Family Serving Yours",
    heroSubtitle: "Compassionate & Dignified Funeral Services Since 2008",
    emergency: "24/7 Emergency Help",
    quote: "Get a Quote",
    legacyTitle: "A Legacy of Compassion",
    years: "Years of Dedicated Service",
    families: "Families Served with Care",
    support: "Support, Day or Night",
    coversTitle: "Our Featured Funeral Covers",
    coversSubtitle: "Tailored packages blending tradition, compassion, and affordability. Explore each for details.",
    fromPrice: "From {price} / month",
    seeMore: "See More",
    findNearestBranch: "Find Your Nearest Branch",
    callUs: "Call Us",
    benefitsTitle: "Additional Benefits Across All Covers",
    groceryHamper: "Free Grocery Hamper",
    groceryDescription: "Essential groceries delivered to the family prior to the funeral day",
    urbanSupport: "Urban Burial Support (Selected Areas)",
    urbanDescription: "R1,000 cash + burial site + 64-seater bus (Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale only)",
    ruralCash: "Rural Homestead Burial Cash",
    ruralDescription: "R2,000 cash to the policy holder (Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale only)",
    repatriation: "Free Repatriation",
    repatriationDescription: "From Gauteng to KZN",
    durbanSupport: "Burial Support – Durban, Pinetown & Empangeni",
    durbanDescription: "Home burial: R2,000 cash to the policy holder\nUrban cemetery (municipality): R4,000 cash for grave hole + 64-seater bus (Applies to Durban, Pinetown & Empangeni only)",
    postMortem: "Post-Mortem Fees Covered",
    postMortemDescription: "Doctor's post-mortem fees covered if the member passes at home (All areas)",
    joinFamilies: "Join thousands of families who trust us in difficult times.",
    speakToday: "Speak to Us Today",
    branches: "Branches",
    findNearestBranch: "Find Your Nearest Branch",
    callUs: "Call Us",
    ourStory: "Our Story",
    ourMission: "Our Mission",
    ourValues: "Our Values",
    meetFounder: "Meet the Founder",
    founderBio: "With over 15 years of experience in the funeral industry, our founder has dedicated his life to providing compassionate care to families in their time of need.",
    compassion: "Compassion",
    compassionDesc: "We treat every family as our own.",
    dignity: "Dignity",
    dignityDesc: "Honoring your loved ones with respect.",
    affordability: "Affordability",
    affordabilityDesc: "Quality services at fair prices.",
    ourBranches: "Our Branches",
    thousandsServed: "Thousands of families served with dignity and care.",
    talkToUs: "Talk to Us", 
    testimonialsTitle: "What Our Families Say",
    joinFamilies: "Join thousands of families who trust us in difficult times.",
    speakToday: "Speak to Us Today",
  },
  zu: {
    home: "Ikhaya",
    aboutUs: "Mayelana Nathi",
    contactUs: "Xhumana Nathi",
    slogan: "Umndeni Wethu Unakekela Owakho",
    heroSubtitle: "Isevisi Zomngcwabo Ezinomusa Nezinesithunzi Kusuka Ngo-2008",
    emergency: "Usizo Lwezimo Ezidingo Ezihuthumayo 24/7",
    quote: "Thola Isilinganiso",
    legacyTitle: "Umlando wethu wobubele",
    years: "Iminyaka Yokuzinikela",
    families: "Imindeni Eduduziwe Ngenhlonipho",
    support: "Ukusekela, Emini Nasebusuku",
    coversTitle: "Amakhava Ethu Omngcwabo Avelele",
    coversSubtitle: "Amaqoqo enzelwe ukuxuba isiko, ububele, nokuthengeka. Hlola ngakunye ukuze uthole imininingwane.",
    fromPrice: "Kusuka ku-{price} / ngenyanga",
    seeMore: "Bona Okuningi",
    findNearestBranch: "Thola Igatsha Eliseduze Nawe",
    callUs: "Sishayele",
    benefitsTitle: "Izinzuzo Ezingeziwe Kuwo wonke amakhava",
    groceryHamper: "Iphekhi Lamahhala Legrosa",
    groceryDescription: "Izigcagco eziyisisekelo ziletwa emndenini ngaphambi kosuku lomngcwabo",
    urbanSupport: "Ukusekela Umngcwabo Wedolobha (Izindawo Ezikhethiwe)",
    urbanDescription: "R1,000 imali + indawo yokungcwaba + ibhasi lezihlalo ezingama-64 (Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale kuphela)",
    ruralCash: "Imali Yokungcwaba Ekubo Lasekhaya",
    ruralDescription: "R2,000 imali kumphathi wepholisi (Pietermaritzburg, Howick, Estcourt, Mooi River & Hammarsdale kuphela)",
    repatriation: "Ukubuyiselwa Ekhaya Mahhala",
    repatriationDescription: "Kusuka eGauteng kuya eKZN",
    durbanSupport: "Ukusekela Umngcwabo – Durban, Pinetown & Empangeni",
    durbanDescription: "Umngcwabo wasekhaya: R2,000 imali kumphathi wepholisi\nAmathemu edolobha (kamasipala): R4,000 imali yokumba ithuna + ibhasi lezihlalo ezingama-64 (Isebenza eDurban, Pinetown & Empangeni kuphela)",
    postMortem: "Izimali Zokuhlolwa Kwesidumbu Zikhokhelwa",
    postMortemDescription: "Izimali zokuhlolwa kwesidumbu zodokotela zikhokhelwa uma ilungu lishona ekhaya (Zonke izindawo)",
    joinFamilies: "Joyina imindeni eminingi ethembele kithi ngezikhathi ezinzima.",
    speakToday: "Khuluma Nathi Namhlanje",
    branches: "Amagatsha",
    findNearestBranch: "Thola Igatsha Eliseduze Nawe",
    callUs: "Sishayele",
    ourStory: "Indaba Yethu",
    ourMission: "Inhloso Yethu",
    ourValues: "Izimiso Zethu",
    meetFounder: "Hlola Umsunguli",
    founderBio: "Ngokuhlangenwe nakho okungaphezulu kweminyaka eyi-15 embonini yomngcwabo, umsunguli wethu unikezele impilo yakhe ekunikezeni ukunakekela okunomusa emindenini ngesikhathi sokudinga kwazo.",
    compassion: "Ububele",
    compassionDesc: "Siphatha yonke imindeni njengowethu.",
    dignity: "Isithunzi",
    dignityDesc: "Ukuhlonipha abathandekayo bakho ngenhlonipho.",
    affordability: "Ukuthengeka",
    affordabilityDesc: "Isevisi zekhwalithi ngamanani alinganayo.",
    ourBranches: "Amagatsha Ethu",
    thousandsServed: "Izinkulungwane zemindeni esekelwe ngesithunzi nokunakekelwa",
    talkToUs: "Khuluma Nathi", 
    testimonialsTitle: "Okushiwo Imindeni Ngathi", 
    joinFamilies: "Joyina imindeni eminingi ethembele kithi ngezikhathi ezinzima.",
    speakToday: "Khuluma Nathi Namhlanje",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zu" : "en"));
  };

  const t = (key: string, vars: Record<string, string> = {}) => {
    let text = translations[language][key] || key;
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};