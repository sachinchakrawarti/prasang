import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const languages = [
  { code: "en", nativeName: "English", englishName: "English", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi", dir: "ltr" },
  { code: "ur", nativeName: "اُردو", englishName: "Urdu", dir: "rtl" },
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    // Set RTL for Urdu
    const selectedLang = languages.find((l) => l.code === language);
    if (selectedLang) {
      document.documentElement.dir = selectedLang.dir;
      document.documentElement.lang = language;
    }
  }, [language]);

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
