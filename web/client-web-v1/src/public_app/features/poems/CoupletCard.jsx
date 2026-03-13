// src/public_app/features/poems/CoupletCard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaQuoteRight,
  FaUser,
  FaGlobe,
  FaLanguage,
  FaRobot,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { getCoupletById } from "./CoupletData";

const CoupletCard = ({ coupletId }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showRomanization, setShowRomanization] = useState(false);
  const { theme, themeName } = useTheme();
  const couplet = getCoupletById(coupletId);

  if (!couplet) return null;

  const firstLine = couplet.original.text.split("\n")[0];
  const isRTL =
    couplet.language === "urdu" ||
    couplet.language === "arabic" ||
    couplet.language === "persian";

  // Theme-based helper functions
  const getGradientClass = () => {
    switch (themeName) {
      case "forest":
        return "from-green-400 to-emerald-400";
      case "lavender":
        return "from-purple-400 to-pink-400";
      case "rose":
        return "from-rose-400 to-pink-400";
      case "sepia":
        return "from-amber-500 to-yellow-500";
      case "dark":
        return "from-gray-600 to-gray-700";
      default:
        return "from-amber-400 to-yellow-400";
    }
  };

  const getHoverTextColor = () => {
    switch (themeName) {
      case "forest":
        return "group-hover:text-green-600";
      case "lavender":
        return "group-hover:text-purple-600";
      case "rose":
        return "group-hover:text-rose-600";
      case "sepia":
        return "group-hover:text-amber-700";
      case "dark":
        return "group-hover:text-gray-300";
      default:
        return "group-hover:text-amber-600";
    }
  };

  const getTagBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700";
      case "lavender":
        return "bg-purple-100 text-purple-700";
      case "rose":
        return "bg-rose-100 text-rose-700";
      case "sepia":
        return "bg-amber-200 text-amber-800";
      case "dark":
        return "bg-gray-700 text-gray-300";
      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  const getThemeBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 text-green-600";
      case "lavender":
        return "bg-purple-50 text-purple-600";
      case "rose":
        return "bg-rose-50 text-rose-600";
      case "sepia":
        return "bg-amber-100 text-amber-700";
      case "dark":
        return "bg-gray-700 text-gray-300";
      default:
        return "bg-amber-50 text-amber-600";
    }
  };

  const getRomanizationColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 hover:text-green-700 border-green-300";
      case "lavender":
        return "text-purple-600 hover:text-purple-700 border-purple-300";
      case "rose":
        return "text-rose-600 hover:text-rose-700 border-rose-300";
      case "sepia":
        return "text-amber-700 hover:text-amber-800 border-amber-400";
      case "dark":
        return "text-gray-300 hover:text-gray-200 border-gray-500";
      default:
        return "text-amber-600 hover:text-amber-700 border-amber-300";
    }
  };

  const getBorderColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-100";
      case "lavender":
        return "border-purple-100";
      case "rose":
        return "border-rose-100";
      case "sepia":
        return "border-amber-200";
      case "dark":
        return "border-gray-700";
      default:
        return "border-amber-100";
    }
  };

  const getQuoteIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-300 group-hover:text-green-400";
      case "lavender":
        return "text-purple-300 group-hover:text-purple-400";
      case "rose":
        return "text-rose-300 group-hover:text-rose-400";
      case "sepia":
        return "text-amber-400 group-hover:text-amber-500";
      case "dark":
        return "text-gray-400 group-hover:text-gray-300";
      default:
        return "text-amber-300 group-hover:text-amber-400";
    }
  };

  const gradientClass = getGradientClass();
  const hoverTextClass = getHoverTextColor();
  const tagClass = getTagBgColor();
  const themeBgClass = getThemeBgColor();
  const romanizationClass = getRomanizationColor();
  const borderClass = getBorderColor();
  const quoteIconClass = getQuoteIconColor();

  return (
    <div
      className={`group ${theme.background.card} rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border ${theme.border.card} overflow-hidden`}
    >
      <Link to={`/couplet/${couplet.id}`} className="block p-5">
        {/* Header with language badge */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center text-white font-bold text-sm`}
            >
              {couplet.poet.name.charAt(0)}
            </div>
            <div>
              <h3
                className={`font-semibold ${theme.text.primary} ${hoverTextClass} transition`}
              >
                {couplet.poet.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaLanguage size={10} className={theme.icon.primary} />{" "}
                  {couplet.language}
                </span>
                <span className="flex items-center gap-1">
                  <FaGlobe size={10} className={theme.icon.primary} />{" "}
                  {couplet.poet.region}
                </span>
              </div>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 ${tagClass} rounded-full`}>
            {couplet.form}
          </span>
        </div>

        {/* Original text preview */}
        <div className={`mb-2 ${isRTL ? "text-right" : "text-left"}`}>
          <p
            className={`text-lg font-serif ${theme.text.primary} line-clamp-2`}
          >
            {firstLine}
          </p>
        </div>

        {/* Romanization toggle */}
        {couplet.original.romanization && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowRomanization(!showRomanization);
            }}
            className={`flex items-center gap-1 text-xs ${romanizationClass.split(" ")[0]} hover:${romanizationClass.split(" ")[1]} mb-2`}
          >
            <FaLanguage size={12} />
            {showRomanization ? "Hide" : "Show"} Romanization
            {showRomanization ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </button>
        )}

        {/* Romanization text */}
        {showRomanization && couplet.original.romanization && (
          <div
            className={`mb-3 text-xs ${theme.text.tertiary} italic border-l-2 ${romanizationClass.split(" ")[2]} pl-2`}
          >
            {couplet.original.romanization.split("\n")[0]}
          </div>
        )}

        {/* Translation toggle */}
        {couplet.aiTranslations && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTranslation(!showTranslation);
            }}
            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700 mb-2"
          >
            <FaRobot size={12} />
            {showTranslation ? "Hide" : "Show"} English Translation
            {showTranslation ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </button>
        )}

        {/* Translation preview */}
        {showTranslation && couplet.aiTranslations.english && (
          <div className="mb-3 text-xs text-gray-600 italic bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
            "{couplet.aiTranslations.english.split("\n")[0]}"
          </div>
        )}

        {/* Themes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {couplet.themes.slice(0, 2).map((theme, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-0.5 ${themeBgClass} rounded`}
            >
              #{theme}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between text-xs ${theme.text.light}`}
        >
          <span>{couplet.year}</span>
          <FaQuoteRight className={`${quoteIconClass} transition`} />
        </div>
      </Link>
    </div>
  );
};

export default CoupletCard;
