// src/public_app/features/poets/poetslist/components/PoetsCard.jsx
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaLanguage,
  FaCalendarAlt,
  FaBookOpen,
  FaQuoteRight,
} from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";
import { getPoetData } from "../../../../data/poetsdata/poets_data_eng";

const PoetsCard = ({ poet }) => {
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();

  // Debug: Log the theme object
  console.log("🎨 PoetsCard - theme:", theme);
  console.log("🎨 PoetsCard - themeName:", themeName);

  // Get translated poet data
  const translatedPoet = getPoetData(poet, language);

  // Debug: Log translated poet
  console.log("📝 PoetsCard - translatedPoet:", translatedPoet);

  // Translation helper for UI
  const t = (text) => translatePoets(text, language);

  // Theme-based helper functions with fallbacks
  const headerGradient =
    themeName === "dark"
      ? "from-amber-700 to-amber-900"
      : "from-amber-400 to-amber-600";

  const buttonGradient =
    themeName === "dark"
      ? "from-amber-600 to-amber-800"
      : "from-amber-500 to-amber-700";

  const hoverTextColor =
    themeName === "dark"
      ? "group-hover:text-amber-300"
      : "group-hover:text-amber-600";

  const tagBgColor =
    themeName === "dark"
      ? "bg-amber-900/30 text-amber-200"
      : "bg-amber-100 text-amber-800";

  const quoteBgColor = themeName === "dark" ? "bg-amber-900/20" : "bg-amber-50";

  // Safe access to theme properties with fallbacks
  const cardBg =
    theme?.background?.card ||
    (themeName === "dark" ? "bg-gray-800" : "bg-white");
  const cardBorder =
    theme?.border?.card ||
    (themeName === "dark" ? "border-gray-700" : "border-gray-200");
  const textPrimary =
    theme?.text?.primary ||
    (themeName === "dark" ? "text-white" : "text-gray-900");
  const textSecondary =
    theme?.text?.secondary ||
    (themeName === "dark" ? "text-gray-300" : "text-gray-600");
  const textTertiary =
    theme?.text?.tertiary ||
    (themeName === "dark" ? "text-gray-400" : "text-gray-500");
  const iconPrimary =
    theme?.icon?.primary ||
    (themeName === "dark" ? "text-amber-400" : "text-amber-600");

  return (
    <div
      className={`group ${cardBg} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border ${cardBorder}`}
    >
      {/* Card Header with Gradient */}
      <div className={`h-32 bg-gradient-to-r ${headerGradient} relative`}>
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-4 border-white dark:border-gray-700">
            {translatedPoet?.image ? (
              <img
                src={translatedPoet.image}
                alt={translatedPoet.name || "Poet"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    translatedPoet?.name || "Poet",
                  )}&background=amber&color=fff&size=96`;
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-amber-100 dark:bg-amber-900/30">
                <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                  {translatedPoet?.name?.charAt(0) || "P"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-14 p-6">
        <div className="mb-4">
          <h2
            className={`text-xl font-bold ${textPrimary} ${hoverTextColor} transition`}
          >
            {translatedPoet?.name || "Unknown Poet"}
          </h2>
          <p className={`text-sm ${textTertiary} mt-1 line-clamp-2`}>
            {translatedPoet?.bio || "No biography available"}
          </p>
        </div>

        {/* Poet Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaGlobe className={iconPrimary} />
            <span className={textSecondary}>
              {translatedPoet?.country || "Unknown"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaLanguage className={iconPrimary} />
            <span className={textSecondary}>
              {translatedPoet?.language || "Unknown"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <FaCalendarAlt className={iconPrimary} />
            <span className={textSecondary}>
              {translatedPoet?.era || "Unknown"}
            </span>
          </div>
        </div>

        {/* Famous Works Preview */}
        <div className="mb-4">
          <p className={`text-xs ${textTertiary} mb-2 flex items-center gap-1`}>
            <FaBookOpen className={iconPrimary} /> {t("famousWorks")}:
          </p>
          <div className="flex flex-wrap gap-2">
            {translatedPoet?.famousWorks?.slice(0, 3).map((work, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 ${tagBgColor} rounded-lg text-xs`}
              >
                {work?.title || "Unknown"}
              </span>
            ))}
            {translatedPoet?.famousWorks?.length > 3 && (
              <span
                className={`px-2 py-1 bg-gray-100 dark:bg-gray-800 ${textTertiary} rounded-lg text-xs`}
              >
                +{translatedPoet.famousWorks.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Quote Preview */}
        <div className={`${quoteBgColor} rounded-lg p-3 mb-4`}>
          <FaQuoteRight className={`${iconPrimary} text-sm mb-1`} />
          <p className={`text-xs ${textSecondary} italic line-clamp-2`}>
            "{translatedPoet?.famousQuotes?.[0] || "No quote available"}"
          </p>
        </div>

        {/* Action Button */}
        <Link
          to={`/poet/${translatedPoet?.id || "#"}`}
          className={`block w-full text-center bg-gradient-to-r ${buttonGradient} 
            text-white py-2 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium`}
        >
          {t("viewProfile")}
        </Link>
      </div>
    </div>
  );
};

export default PoetsCard;
