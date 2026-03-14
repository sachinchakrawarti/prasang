// src/public_app/features/poets/poetsdetails/components/WritingStyle.jsx
import { FaPenFancy, FaTags } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";

const WritingStyle = ({ style = "", themes = [] }) => {
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

  const getSubheadingColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-800 dark:text-green-200";
      case "lavender":
        return "text-purple-800 dark:text-purple-200";
      case "rose":
        return "text-rose-800 dark:text-rose-200";
      case "sepia":
        return "text-amber-800 dark:text-amber-200";
      case "dark":
        return "text-gray-200";
      default:
        return "text-gray-800 dark:text-gray-200";
    }
  };

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const tagBgColor = getTagBgColor();
  const subheadingColor = getSubheadingColor();

  // Handle style if it's an object with translations
  const writingStyle =
    typeof style === "object" ? style[language] || style.en || "" : style || "";

  // Handle themes if they're objects with translations
  const processedThemes = themes.map((theme) => {
    if (typeof theme === "object") {
      return theme[language] || theme.en || "";
    }
    return theme;
  });

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
    >
      <h3
        className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
      >
        <FaPenFancy className={iconColor} /> {t("writingStyle")}
      </h3>

      {writingStyle && (
        <div className="mb-4">
          <p className={`${textSecondary} leading-relaxed`}>{writingStyle}</p>
        </div>
      )}

      {processedThemes.length > 0 && (
        <div>
          <h4
            className={`font-semibold ${subheadingColor} mb-2 flex items-center gap-2 text-sm`}
          >
            <FaTags className={iconColor} /> {t("themes")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {processedThemes.map((theme, index) => (
              <span
                key={index}
                className={`px-3 py-1 ${tagBgColor} rounded-full text-sm`}
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WritingStyle;
