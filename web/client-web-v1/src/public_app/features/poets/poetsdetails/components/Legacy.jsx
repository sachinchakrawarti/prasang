// src/public_app/features/poets/poetsdetails/components/Legacy.jsx
import { FaHistory } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";

const Legacy = ({ legacy = "" }) => {
  const { themeName } = useTheme();
  const { language } = useLanguage();

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

  const getHoverEffect = () => {
    switch (themeName) {
      case "forest":
        return "hover:shadow-green-200/50 dark:hover:shadow-green-900/30";
      case "lavender":
        return "hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30";
      case "rose":
        return "hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30";
      case "sepia":
        return "hover:shadow-amber-200/50 dark:hover:shadow-amber-900/30";
      case "dark":
        return "hover:shadow-gray-800";
      default:
        return "hover:shadow-amber-200/50 dark:hover:shadow-amber-900/30";
    }
  };

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const hoverEffect = getHoverEffect();

  // Handle legacy if it's an object with translations
  const legacyText =
    typeof legacy === "object"
      ? legacy[language] || legacy.en || ""
      : legacy || "";

  if (!legacyText) {
    return null;
  }

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor} transition-all hover:shadow-xl ${hoverEffect}`}
    >
      <h3
        className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
      >
        <FaHistory className={iconColor} /> {t("legacy")}
      </h3>

      <p className={`${textSecondary} leading-relaxed`}>{legacyText}</p>
    </div>
  );
};

export default Legacy;
