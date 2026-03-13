// src/public_app/layout/navbar/components/LanguageSwitcher.jsx
import { useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useTheme } from "../../../../theme";

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
  const { theme, themeName } = useTheme();

  const handleSelect = (lang) => {
    console.log("Language selected:", lang.code);
    if (onSelect) onSelect(lang);
    setIsOpen(false);
  };

  // Theme-based styling helpers
  const getAccentColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-700 dark:text-amber-400";
      default:
        return "text-amber-600 dark:text-amber-400";
    }
  };

  const getHoverBgColor = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-100 dark:hover:bg-green-900/30";
      case "lavender":
        return "hover:bg-purple-100 dark:hover:bg-purple-900/30";
      case "rose":
        return "hover:bg-rose-100 dark:hover:bg-rose-900/30";
      case "sepia":
        return "hover:bg-amber-200 dark:hover:bg-amber-900/30";
      default:
        return "hover:bg-amber-100 dark:hover:bg-amber-900/30";
    }
  };

  const getBorderColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-200 dark:border-green-800";
      case "lavender":
        return "border-purple-200 dark:border-purple-800";
      case "rose":
        return "border-rose-200 dark:border-rose-800";
      case "sepia":
        return "border-amber-300 dark:border-amber-700";
      default:
        return "border-amber-200 dark:border-amber-800";
    }
  };

  const accentColor = getAccentColor();
  const hoverBgColor = getHoverBgColor();
  const borderColor = getBorderColor();

  /* ---------------- MOBILE VERSION ---------------- */

  if (mobile) {
    return (
      <div className={`border-t ${borderColor} pt-4 mt-4 px-3`}>
        <div
          className={`flex items-center gap-2 mb-3 text-sm font-semibold ${accentColor}`}
        >
          <FaGlobe />
          Language
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl ${theme.background.card} border ${borderColor} shadow-sm active:scale-95 transition ${hoverBgColor}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className={`text-xs font-medium ${theme.text.secondary}`}>
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
        className={`flex items-center gap-1 p-2 ${accentColor} ${hoverBgColor} rounded-full transition-all`}
      >
        <FaGlobe size={18} />
        <FaChevronDown size={12} />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 ${theme.background.overlay} backdrop-blur-md rounded-2xl shadow-xl border ${borderColor} py-2 z-50`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`w-full px-4 py-2 text-left text-sm ${theme.text.secondary} ${hoverBgColor} flex items-center gap-3 transition-colors`}
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
