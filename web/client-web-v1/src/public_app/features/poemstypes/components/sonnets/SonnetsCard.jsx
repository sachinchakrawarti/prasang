// src/public_app/features/poemstypes/components/sonnets/SonnetsCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaGlobe,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";
import { useTheme } from "../../../../../theme";

const SonnetsCard = ({ poet }) => {
  const { themeName } = useTheme();

  // Theme-based styling
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
        return "text-gray-800 dark:text-white";
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

  const getQuoteBg = () => {
    switch (themeName) {
      case "forest":
        return "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20";
      case "lavender":
        return "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20";
      case "rose":
        return "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20";
      case "sepia":
        return "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20";
      case "dark":
        return "from-gray-700 to-gray-600";
      default:
        return "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20";
    }
  };

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const iconColor = getIconColor();
  const borderColor = getBorderColor();
  const quoteBg = getQuoteBg();

  // Get hover color based on poet's theme color
  const getHoverColor = () => {
    if (poet.color.includes("rose"))
      return "group-hover:text-rose-600 dark:group-hover:text-rose-400";
    if (poet.color.includes("blue"))
      return "group-hover:text-blue-600 dark:group-hover:text-blue-400";
    if (poet.color.includes("purple"))
      return "group-hover:text-purple-600 dark:group-hover:text-purple-400";
    if (poet.color.includes("amber"))
      return "group-hover:text-amber-600 dark:group-hover:text-amber-400";
    if (poet.color.includes("emerald"))
      return "group-hover:text-emerald-600 dark:group-hover:text-emerald-400";
    return "group-hover:text-amber-600 dark:group-hover:text-amber-400";
  };

  const hoverColor = getHoverColor();

  return (
    <Link
      to={poet.path}
      className={`group block ${cardBg} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border ${borderColor}`}
    >
      {/* Card Header with Gradient */}
      <div className={`h-24 bg-gradient-to-r ${poet.color} relative`}>
        {/* Poet Image Overlay */}
        <div className="absolute -bottom-10 left-4">
          <div className="w-20 h-20 rounded-xl border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
            <img
              src={poet.image}
              alt={poet.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  poet.name,
                )}&background=amber&color=fff&size=80`;
              }}
            />
          </div>
        </div>

        {/* Era Badge */}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs text-white flex items-center gap-1">
            <FaCalendarAlt className="text-xs" /> {poet.era}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-12 p-5">
        {/* Poet Name and Country */}
        <div className="mb-3">
          <h3
            className={`font-bold text-lg ${textPrimary} ${hoverColor} transition`}
          >
            {poet.name}
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className={`flex items-center gap-1 ${textSecondary}`}>
              <FaGlobe className={iconColor} /> {poet.country}
            </span>
          </div>
        </div>

        {/* Famous Sonnet */}
        <div className="mb-3">
          <span
            className={`text-xs font-medium ${iconColor} bg-opacity-10 ${iconColor.replace("text", "bg")} px-2 py-1 rounded-full`}
          >
            {poet.famousSonnet}
          </span>
        </div>

        {/* Preview Quote */}
        <div className={`bg-gradient-to-r ${quoteBg} rounded-lg p-3 mb-3`}>
          <FaQuoteLeft className={`${iconColor} text-xs mb-1`} />
          <p
            className={`text-xs ${textSecondary} italic whitespace-pre-line line-clamp-2`}
          >
            {poet.preview}
          </p>
        </div>

        {/* Stats and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className={`text-xs ${textSecondary} flex items-center gap-1`}>
            <FaBookOpen className={iconColor} /> {poet.sonnetsCount} sonnets
          </span>
          <span
            className={`${iconColor} text-sm font-medium group-hover:translate-x-1 transition-transform`}
          >
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SonnetsCard;
