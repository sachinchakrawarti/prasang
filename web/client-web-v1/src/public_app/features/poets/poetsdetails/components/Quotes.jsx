// src/public_app/features/poets/poetsdetails/components/Quotes.jsx
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";
import { useState } from "react";

const Quotes = ({ quotes = [] }) => {
  const { themeName } = useTheme();
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = (text) => translatePoets(text, language);

  // Theme-based styles with complete theme support
  const getCardBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-white dark:bg-green-900/20";
      case "lavender":
        return "bg-white dark:bg-purple-900/20";
      case "rose":
        return "bg-white dark:bg-rose-900/20";
      case "sepia":
        return "bg-white dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getTextPrimary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-900 dark:text-green-100";
      case "lavender":
        return "text-purple-900 dark:text-purple-100";
      case "rose":
        return "text-rose-900 dark:text-rose-100";
      case "sepia":
        return "text-amber-900 dark:text-amber-100";
      case "dark":
        return "text-white";
      default:
        return "text-gray-900 dark:text-white";
    }
  };

  const getTextSecondary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-700 dark:text-green-300";
      case "lavender":
        return "text-purple-700 dark:text-purple-300";
      case "rose":
        return "text-rose-700 dark:text-rose-300";
      case "sepia":
        return "text-amber-700 dark:text-amber-300";
      case "dark":
        return "text-gray-300";
      default:
        return "text-gray-600 dark:text-gray-300";
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
        return "border-amber-200 dark:border-amber-800";
      case "dark":
        return "border-gray-700";
      default:
        return "border-amber-100 dark:border-gray-700";
    }
  };

  const getIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-500 dark:text-green-400";
      case "lavender":
        return "text-purple-500 dark:text-purple-400";
      case "rose":
        return "text-rose-500 dark:text-rose-400";
      case "sepia":
        return "text-amber-500 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-500 dark:text-amber-400";
    }
  };

  const getQuoteBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/30";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/30";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/30";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/30";
      case "dark":
        return "bg-gray-700";
      default:
        return "bg-amber-50 dark:bg-gray-700";
    }
  };

  const getDotColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-500 dark:bg-green-400";
      case "lavender":
        return "bg-purple-500 dark:bg-purple-400";
      case "rose":
        return "bg-rose-500 dark:bg-rose-400";
      case "sepia":
        return "bg-amber-500 dark:bg-amber-400";
      case "dark":
        return "bg-gray-400";
      default:
        return "bg-amber-500 dark:bg-amber-400";
    }
  };

  const getNavButtonHover = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-100 dark:hover:bg-green-800";
      case "lavender":
        return "hover:bg-purple-100 dark:hover:bg-purple-800";
      case "rose":
        return "hover:bg-rose-100 dark:hover:bg-rose-800";
      case "sepia":
        return "hover:bg-amber-100 dark:hover:bg-amber-800";
      case "dark":
        return "hover:bg-gray-600";
      default:
        return "hover:bg-gray-200 dark:hover:bg-gray-600";
    }
  };

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const quoteBgColor = getQuoteBgColor();
  const dotColor = getDotColor();
  const navButtonHover = getNavButtonHover();

  if (!quotes || quotes.length === 0) {
    return (
      <div
        className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
      >
        <h3
          className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
        >
          <FaQuoteLeft className={iconColor} /> {t("famousQuotes")}
        </h3>
        <p className={textSecondary}>
          {t("noQuotes") || "No quotes available"}
        </p>
      </div>
    );
  }

  // Handle quotes that might be objects with translations
  const processedQuotes = quotes.map((quote) => {
    if (typeof quote === "object") {
      return quote[language] || quote.en || "";
    }
    return quote;
  });

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % processedQuotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + processedQuotes.length) % processedQuotes.length,
    );
  };

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
    >
      <h3
        className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
      >
        <FaQuoteLeft className={iconColor} /> {t("famousQuotes")}
      </h3>

      <div className={`${quoteBgColor} rounded-xl p-6`}>
        <div className="flex justify-between mb-4">
          <FaQuoteLeft className={`${iconColor} text-2xl opacity-30`} />
          <FaQuoteRight className={`${iconColor} text-2xl opacity-30`} />
        </div>

        <p className={`text-lg italic ${textPrimary} text-center font-serif`}>
          "{processedQuotes[currentIndex]}"
        </p>

        {processedQuotes.length > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevQuote}
              className={`p-2 rounded-full ${navButtonHover} transition`}
            >
              ←
            </button>
            <span className={`text-sm ${textSecondary}`}>
              {currentIndex + 1} / {processedQuotes.length}
            </span>
            <button
              onClick={nextQuote}
              className={`p-2 rounded-full ${navButtonHover} transition`}
            >
              →
            </button>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-4">
          {processedQuotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? `w-8 ${dotColor}`
                  : `w-2 ${dotColor} opacity-40 hover:opacity-70`
              }`}
              aria-label={t("goToQuote")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
