// src/public_app/features/poets/poetsdetails/components/Biography.jsx
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../../../../../theme";

const Biography = ({ poet }) => {
  const { themeName } = useTheme();

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

  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();

  return (
    <div
      className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
    >
      <h2
        className={`text-2xl font-bold ${textPrimary} mb-4 flex items-center gap-2`}
      >
        <FaQuoteLeft className={iconColor} /> Biography
      </h2>

      <div className="space-y-4">
        <p className={`${textSecondary} leading-relaxed`}>
          {typeof poet?.longBio === "string" ? poet.longBio : poet?.bio || ""}
        </p>

        <div className={`pt-4 border-t ${borderColor}`}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Born</p>
              <p className={`font-medium ${textPrimary}`}>
                {typeof poet?.born === "string" ? poet.born : poet?.born || ""}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Died</p>
              <p className={`font-medium ${textPrimary}`}>
                {typeof poet?.died === "string" ? poet.died : poet?.died || ""}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Birthplace
              </p>
              <p className={`font-medium ${textPrimary}`}>
                {typeof poet?.birthplace === "string"
                  ? poet.birthplace
                  : poet?.birthplace || ""}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Period</p>
              <p className={`font-medium ${textPrimary}`}>
                {typeof poet?.period === "string"
                  ? poet.period
                  : poet?.period || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
