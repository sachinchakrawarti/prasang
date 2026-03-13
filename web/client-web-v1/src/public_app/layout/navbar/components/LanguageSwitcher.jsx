import { useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

const LanguageSwitcher = ({ mobile = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    console.log("Language selected:", lang.code);
    if (onSelect) onSelect(lang);
    setIsOpen(false);
  };

  /* ---------------- MOBILE VERSION ---------------- */

  if (mobile) {
    return (
      <div className="border-t border-amber-200 dark:border-amber-800 pt-4 mt-4 px-3">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-amber-600 dark:text-amber-400">
          <FaGlobe />
          Language
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-white dark:bg-gray-800 border border-amber-100 dark:border-amber-800 shadow-sm active:scale-95 transition"
            >
              <span className="text-xl">{lang.flag}</span>

              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- DESKTOP VERSION ---------------- */

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full transition-all"
      >
        <FaGlobe size={18} />
        <FaChevronDown size={12} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-amber-200 dark:border-amber-800 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 flex items-center gap-3 transition-colors"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
