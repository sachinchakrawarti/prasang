// src/public_app/features/poets/poetsdetails/components/Legacy.jsx
import { FaHistory } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { translatePoets } from "../../../../../locales/poetsTranslations";

const Legacy = ({ legacy = "" }) => {
  const { themeName } = useTheme();
  const { language } = useLanguage();

  const t = (text) => translatePoets(text, language);

  const cardBg = themeName === "dark" ? "bg-gray-800" : "bg-white";
  const textPrimary = themeName === "dark" ? "text-white" : "text-gray-900";
  const textSecondary =
    themeName === "dark" ? "text-gray-300" : "text-gray-600";
  const borderColor =
    themeName === "dark" ? "border-gray-700" : "border-amber-100";
  const iconColor = themeName === "dark" ? "text-amber-400" : "text-amber-500";

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
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
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
