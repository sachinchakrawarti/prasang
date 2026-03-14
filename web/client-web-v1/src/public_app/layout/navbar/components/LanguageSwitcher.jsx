import { useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../../../../context/LanguageContext";
import { useTheme } from "../../../../theme";

const LanguageSwitcher = ({ mobile = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, languages } = useLanguage();
  const { theme } = useTheme();

  const handleSelect = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
    if (onSelect) onSelect();
  };

  const currentLang =
    languages.find((l) => l.code === language) || languages[0];

  // Display native name, with English in parentheses for non-English
  const getDisplayName = (lang) => {
    if (lang.code === "en") return lang.nativeName;
    return `${lang.nativeName} (${lang.englishName})`;
  };

  // Mobile version
  if (mobile) {
    return (
      <div className={`border-t ${theme.border.accent} pt-4 mt-4 px-3`}>
        <div
          className={`flex items-center gap-2 mb-3 text-sm font-semibold ${theme.text.accent}`}
        >
          <FaGlobe className={theme.icon.primary} />
          <span>Language</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl ${theme.background.card} border ${theme.border.card} shadow-sm active:scale-95 transition ${
                language === lang.code ? `ring-2 ${theme.ring.accent}` : ""
              }`}
            >
              <span className={`text-xs font-medium ${theme.text.primary}`}>
                {getDisplayName(lang)}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition-all`}
        aria-label="Switch language"
      >
        <FaGlobe className={theme.icon.primary} size={18} />
        <span className={`text-sm ${theme.text.primary}`}>
          {currentLang.nativeName}
        </span>
        <FaChevronDown size={12} className={theme.icon.secondary} />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 ${theme.background.card} rounded-2xl shadow-xl border ${theme.border.accent} py-2 z-50`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm ${theme.text.secondary} ${theme.background.cardHover} flex items-center gap-2 transition ${
                language === lang.code
                  ? `${theme.background.accent} ${theme.text.accent}`
                  : ""
              }`}
            >
              <span>{getDisplayName(lang)}</span>
              {language === lang.code && (
                <span className={`ml-auto ${theme.icon.primary}`}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
