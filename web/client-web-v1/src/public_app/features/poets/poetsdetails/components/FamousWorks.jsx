// src/public_app/features/poets/poetsdetails/components/FamousWorks.jsx
import { FaBook, FaCalendarAlt, FaTag } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";

const FamousWorks = ({ works = [] }) => {
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

  const getTextTertiary = () => {
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
        return "text-gray-500 dark:text-gray-400";
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

  const getWorkCardBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/40";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/40";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/40";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/40";
      case "dark":
        return "bg-gray-700";
      default:
        return "bg-gray-50 dark:bg-gray-700";
    }
  };

  const getWorkCardHover = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-100 dark:hover:bg-green-900/60";
      case "lavender":
        return "hover:bg-purple-100 dark:hover:bg-purple-900/60";
      case "rose":
        return "hover:bg-rose-100 dark:hover:bg-rose-900/60";
      case "sepia":
        return "hover:bg-amber-100 dark:hover:bg-amber-900/60";
      case "dark":
        return "hover:bg-gray-600";
      default:
        return "hover:bg-gray-100 dark:hover:bg-gray-600";
    }
  };

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const textTertiary = getTextTertiary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const workCardBg = getWorkCardBg();
  const workCardHover = getWorkCardHover();

  if (!works || works.length === 0) {
    return (
      <div
        className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
      >
        <h3
          className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
        >
          <FaBook className={iconColor} /> {t("famousWorks")}
        </h3>
        <p className={textTertiary}>
          {t("noWorks") || "No famous works listed"}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
    >
      <h3
        className={`text-xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
      >
        <FaBook className={iconColor} /> {t("famousWorks")}
      </h3>

      <div className="space-y-4">
        {works.map((work, index) => {
          // Handle work title if it's an object with translations
          const workTitle =
            typeof work?.title === "object"
              ? work.title[language] || work.title.en || ""
              : work?.title || "";

          // Handle work type if it's an object with translations
          const workType =
            typeof work?.type === "object"
              ? work.type[language] || work.type.en || ""
              : work?.type || "";

          // Handle work description if it's an object with translations
          const workDescription =
            typeof work?.description === "object"
              ? work.description[language] || work.description.en || ""
              : work?.description || "";

          return (
            <div
              key={index}
              className={`${workCardBg} ${workCardHover} rounded-xl p-4 transition-colors duration-200`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-semibold ${textPrimary}`}>{workTitle}</h4>
                {work.year && (
                  <span
                    className={`flex items-center gap-1 text-xs ${textTertiary}`}
                  >
                    <FaCalendarAlt className={iconColor} /> {work.year}
                  </span>
                )}
              </div>

              {workType && (
                <span
                  className={`inline-flex items-center gap-1 text-xs ${textSecondary} mb-2`}
                >
                  <FaTag className={iconColor} /> {workType}
                </span>
              )}

              {workDescription && (
                <p className={`text-sm ${textSecondary} mt-2`}>
                  {workDescription}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FamousWorks;
