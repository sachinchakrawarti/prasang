// src/public_app/features/poets/poetsdetails/PoetsDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../../../theme";
import { useLanguage } from "../../../../context/LanguageContext";
import { poetsData } from "../../../data/poetsdata/poets_data_eng";
import { getPoetData } from "../../../data/poetsdata/poets_data_eng";
import { translatePoets } from "../../../../locales/poetsTranslations";

// Import components
import PoetHeader from "./components/PoetHeader";
import Biography from "./components/Biography";
import FamousWorks from "./components/FamousWorks";
import Quotes from "./components/Quotes";
import WritingStyle from "./components/WritingStyle";
import AchievementsCard from "./components/AchievementsCard";
import Legacy from "./components/Legacy";

const PoetsDetails = () => {
  const { id } = useParams();
  const { themeName } = useTheme();
  const { language } = useLanguage();
  const [poet, setPoet] = useState(null);
  const [loading, setLoading] = useState(true);

  // Translation helper
  const t = (text) => translatePoets(text, language);

  useEffect(() => {
    // Find poet by ID
    const foundPoet = poetsData.find((p) => p.id === parseInt(id));

    if (foundPoet) {
      // Get translated poet data
      const translatedPoet = getPoetData(foundPoet, language);
      console.log("📝 PoetsDetails - translatedPoet:", translatedPoet);
      setPoet(translatedPoet);
    }

    setLoading(false);
  }, [id, language]);

  // Theme-based background colors (matching your theme variants)
  const getBgColor = () => {
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
        return "bg-gray-900";
      default:
        return "bg-gray-50 dark:bg-gray-900";
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

  const getSpinnerColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-500 border-t-transparent";
      case "lavender":
        return "border-purple-500 border-t-transparent";
      case "rose":
        return "border-rose-500 border-t-transparent";
      case "sepia":
        return "border-amber-500 border-t-transparent";
      case "dark":
        return "border-gray-400 border-t-transparent";
      default:
        return "border-amber-500 border-t-transparent";
    }
  };

  const getErrorTextColor = () => {
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
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const bgColor = getBgColor();
  const textPrimary = getTextPrimary();
  const spinnerColor = getSpinnerColor();
  const errorTextColor = getErrorTextColor();

  if (loading) {
    return (
      <div
        className={`min-h-screen ${bgColor} flex items-center justify-center`}
      >
        <div className="text-center">
          <div
            className={`w-16 h-16 border-4 ${spinnerColor} rounded-full animate-spin mx-auto mb-4`}
          ></div>
          <p className={textPrimary}>{t("loading") || "Loading..."}</p>
        </div>
      </div>
    );
  }

  if (!poet) {
    return (
      <div
        className={`min-h-screen ${bgColor} flex items-center justify-center`}
      >
        <div className="text-center">
          <h1 className={`text-2xl font-bold ${textPrimary} mb-4`}>
            {t("poetNotFound") || "Poet not found"}
          </h1>
          <p className={errorTextColor}>
            {t("poetNotFoundMessage") ||
              "The poet you're looking for doesn't exist."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Poet Header */}
        <PoetHeader poet={poet} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Biography and Details */}
          <div className="lg:col-span-2 space-y-8">
            <Biography poet={poet} />
            <FamousWorks works={poet.famousWorks} />
            <Quotes quotes={poet.famousQuotes} />
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="space-y-8">
            <WritingStyle style={poet.writingStyle} themes={poet.themes} />
            <AchievementsCard achievements={poet.notableAchievements} />
            <Legacy legacy={poet.legacy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetsDetails;
