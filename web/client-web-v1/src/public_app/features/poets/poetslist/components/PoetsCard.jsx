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

  // Theme-based gradient helpers (same as HeroSection)
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-800";
      case "lavender":
        return "from-purple-600 to-pink-800";
      case "rose":
        return "from-rose-600 to-pink-800";
      case "sepia":
        return "from-amber-600 to-yellow-800";
      case "dark":
        return "from-gray-700 to-gray-900";
      default:
        return "from-amber-400 to-amber-600";
    }
  };

  const getButtonGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800";
      case "lavender":
        return "from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800";
      case "rose":
        return "from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800";
      case "sepia":
        return "from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800";
      case "dark":
        return "from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900";
      default:
        return "from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800";
    }
  };

  const getHoverTextColor = () => {
    switch (themeName) {
      case "forest":
        return "group-hover:text-green-600 dark:group-hover:text-green-400";
      case "lavender":
        return "group-hover:text-purple-600 dark:group-hover:text-purple-400";
      case "rose":
        return "group-hover:text-rose-600 dark:group-hover:text-rose-400";
      case "sepia":
        return "group-hover:text-amber-600 dark:group-hover:text-amber-400";
      case "dark":
        return "group-hover:text-gray-300";
      default:
        return "group-hover:text-amber-600 dark:group-hover:text-amber-400";
    }
  };

  const getTagBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200";
      case "lavender":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200";
      case "rose":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200";
      case "sepia":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200";
      case "dark":
        return "bg-gray-700 text-gray-300";
      default:
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200";
    }
  };

  const getQuoteBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/20";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/20";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/20";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-amber-50 dark:bg-amber-900/20";
    }
  };

  const getIconPrimaryColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-600 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-600 dark:text-amber-400";
    }
  };

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
        return "bg-white dark:bg-amber-900/20";
    }
  };

  const getCardBorder = () => {
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
        return "border-amber-100 dark:border-amber-800";
    }
  };

  const getAvatarBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 dark:bg-green-900/30";
      case "lavender":
        return "bg-purple-100 dark:bg-purple-900/30";
      case "rose":
        return "bg-rose-100 dark:bg-rose-900/30";
      case "sepia":
        return "bg-amber-100 dark:bg-amber-900/30";
      case "dark":
        return "bg-gray-700";
      default:
        return "bg-amber-100 dark:bg-amber-900/30";
    }
  };

  const getAvatarTextColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-600 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-600 dark:text-amber-400";
    }
  };

  const headerGradient = getHeaderGradient();
  const buttonGradient = getButtonGradient();
  const hoverTextColor = getHoverTextColor();
  const tagBgColor = getTagBgColor();
  const quoteBgColor = getQuoteBgColor();
  const iconPrimary = getIconPrimaryColor();
  const cardBg = getCardBg();
  const cardBorder = getCardBorder();
  const avatarBg = getAvatarBg();
  const avatarTextColor = getAvatarTextColor();

  // Text colors based on theme
  const textPrimary = themeName === "dark" ? "text-white" : "text-gray-900";
  const textSecondary =
    themeName === "dark" ? "text-gray-300" : "text-gray-600";
  const textTertiary = themeName === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`group ${cardBg} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border ${cardBorder}`}
    >
      {/* Card Header with Gradient */}
      <div className={`h-32 bg-gradient-to-r ${headerGradient} relative`}>
        <div className="absolute -bottom-12 left-6">
          <div
            className={`w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-4 border-white dark:border-gray-700`}
          >
            {translatedPoet?.image ? (
              <img
                src={translatedPoet.image}
                alt={translatedPoet.name || "Poet"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    translatedPoet?.name || "Poet",
                  )}&background=${themeName === "dark" ? "4b5563" : "amber"}&color=fff&size=96`;
                }}
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${avatarBg}`}
              >
                <span className={`text-4xl font-bold ${avatarTextColor}`}>
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
            className={`text-xl font-bold ${textPrimary} ${hoverTextColor} transition cursor-pointer`}
          >
            {translatedPoet?.name || "Unknown Poet"}
          </h2>
          <p className={`text-sm ${textTertiary} mt-1 line-clamp-2`}>
            {translatedPoet?.bio || "No biography available"}
          </p>
        </div>

        {/* Poet Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <FaGlobe className={iconPrimary} />
            <span className={textSecondary}>
              {translatedPoet?.country || "Unknown"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaLanguage className={iconPrimary} />
            <span className={textSecondary}>
              {translatedPoet?.language || "Unknown"}
            </span>
          </div>
          <div className="flex items-center gap-2">
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
