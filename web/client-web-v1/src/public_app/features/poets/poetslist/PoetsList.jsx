// src/public_app/features/poets/poetslist/PoetsList.jsx
import { useState } from "react";
import {
  FaUserGraduate,
  FaGlobe,
  FaLanguage,
  FaCalendarAlt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../../../../theme";
import { useLanguage } from "../../../../context/LanguageContext";
import { translatePoets } from "../../../../locales/poetsTranslations";
import { poetsData } from "../../../data/poetsdata/poets_data_eng";
import PoetsCard from "./components/PoetsCard";

const PoetsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");

  const { theme, themeName } = useTheme();
  const { language } = useLanguage();

  // Translation helper
  const t = (text) => translatePoets(text, language);

  // Helper function to get language string from poet data
  const getPoetLanguageString = (poet) => {
    if (typeof poet.language === "string") {
      return poet.language; // Old format
    }
    // New format - return the English version for filtering
    return poet.language?.en || "Unknown";
  };

  // Helper function to get era string from poet data
  const getPoetEraString = (poet) => {
    if (typeof poet.period === "string") {
      return poet.period; // Old format
    }
    // New format - return the English version for filtering
    return poet.period?.en || "Unknown";
  };

  // Get unique languages for filter
  const languages = [
    "all",
    ...new Set(
      poetsData.map((poet) => {
        const langStr = getPoetLanguageString(poet);
        return langStr.split(",")[0].trim();
      }),
    ),
  ];

  // Get unique eras/periods for filter
  const eras = [
    "all",
    ...new Set(
      poetsData.map((poet) => {
        const eraStr = getPoetEraString(poet);
        return eraStr.split(",")[0].trim();
      }),
    ),
  ];

  // Filter poets based on search and filters
  const filteredPoets = poetsData.filter((poet) => {
    // Get strings for comparison
    const poetLangStr = getPoetLanguageString(poet).toLowerCase();
    const poetEraStr = getPoetEraString(poet).toLowerCase();

    // Get searchable text based on current language
    const poetName =
      typeof poet.name === "object"
        ? poet.name[language] || poet.name.en || ""
        : poet.name;
    const poetFullName =
      typeof poet.fullName === "object"
        ? poet.fullName[language] || poet.fullName.en || ""
        : poet.fullName;
    const poetBio =
      typeof poet.bio === "object"
        ? poet.bio[language] || poet.bio.en || ""
        : poet.bio;

    const matchesSearch =
      poetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poetFullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poetBio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage =
      selectedLanguage === "all" ||
      poetLangStr.includes(selectedLanguage.toLowerCase());

    const matchesEra =
      selectedEra === "all" || poetEraStr.includes(selectedEra.toLowerCase());

    return matchesSearch && matchesLanguage && matchesEra;
  });

  // Theme-based helper functions
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-600";
      case "lavender":
        return "from-purple-600 to-pink-600";
      case "rose":
        return "from-rose-600 to-pink-600";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      case "dark":
        return "from-gray-600 to-gray-700";
      default:
        return "from-amber-600 to-yellow-600";
    }
  };

  const getStatsGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-50 to-emerald-50";
      case "lavender":
        return "from-purple-50 to-pink-50";
      case "rose":
        return "from-rose-50 to-pink-50";
      case "sepia":
        return "from-amber-100 to-yellow-100";
      case "dark":
        return "from-gray-800 to-gray-700";
      default:
        return "from-amber-50 to-yellow-50";
    }
  };

  const getActiveFilterClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700";
      case "lavender":
        return "bg-purple-100 text-purple-700";
      case "rose":
        return "bg-rose-100 text-rose-700";
      case "sepia":
        return "bg-amber-100 text-amber-700";
      case "dark":
        return "bg-gray-700 text-gray-200";
      default:
        return "bg-amber-100 text-amber-700";
    }
  };

  const headerGradient = getHeaderGradient();
  const statsGradient = getStatsGradient();
  const activeFilterClass = getActiveFilterClass();

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme.background.primary}`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span
            className={`bg-gradient-to-r ${headerGradient} bg-clip-text text-transparent`}
          >
            {t("title")}
          </span>
        </h1>
        <p className={`${theme.text.secondary} max-w-2xl mx-auto`}>
          {t("subtitle")}
        </p>
      </div>

      {/* Search and Filters */}
      <div
        className={`${theme.background.card} rounded-2xl shadow-lg p-6 mb-10 border ${theme.border.card}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus}`}
            />
          </div>

          {/* Language Filter */}
          <div className="relative">
            <FaLanguage className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus} appearance-none`}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "all" ? t("allLanguages") : lang}
                </option>
              ))}
            </select>
          </div>

          {/* Era Filter */}
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus} appearance-none`}
            >
              {eras.map((era) => (
                <option key={era} value={era}>
                  {era === "all" ? t("allEras") : era}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedLanguage !== "all" || selectedEra !== "all") && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className={`text-sm ${theme.text.tertiary}`}>
              {t("activeFilters")}
            </span>
            {selectedLanguage !== "all" && (
              <span
                className={`px-3 py-1 ${activeFilterClass} rounded-full text-sm flex items-center gap-1`}
              >
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button
                  onClick={() => setSelectedLanguage("all")}
                  className="ml-1 hover:text-amber-900"
                >
                  <FaTimes size={12} />
                </button>
              </span>
            )}
            {selectedEra !== "all" && (
              <span
                className={`px-3 py-1 ${activeFilterClass} rounded-full text-sm flex items-center gap-1`}
              >
                <FaCalendarAlt className="text-xs" /> {selectedEra}
                <button
                  onClick={() => setSelectedEra("all")}
                  className="ml-1 hover:text-amber-900"
                >
                  <FaTimes size={12} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Poets Grid */}
      {filteredPoets.length === 0 ? (
        <div
          className={`text-center py-16 ${theme.background.secondary} rounded-2xl`}
        >
          <FaUserGraduate
            className={`text-5xl ${theme.icon.secondary} mx-auto mb-4`}
          />
          <h3 className={`text-xl font-semibold ${theme.text.primary} mb-2`}>
            {t("noPoetsFound")}
          </h3>
          <p className={theme.text.tertiary}>{t("tryAdjusting")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoets.map((poet) => (
            <PoetsCard key={poet.id} poet={poet} />
          ))}
        </div>
      )}

      {/* Stats Section */}
      <div
        className={`mt-16 bg-gradient-to-r ${statsGradient} rounded-2xl p-8`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.text.accent}`}>
              {poetsData.length}
            </div>
            <div className={`text-sm ${theme.text.tertiary}`}>
              {t("totalPoets")}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.text.accent}`}>
              {poetsData.reduce(
                (acc, poet) => acc + (poet.famousWorks?.length || 0),
                0,
              )}
            </div>
            <div className={`text-sm ${theme.text.tertiary}`}>
              {t("famousWorks")}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.text.accent}`}>
              {languages.length - 1}
            </div>
            <div className={`text-sm ${theme.text.tertiary}`}>
              {t("languages")}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.text.accent}`}>
              {eras.length - 1}
            </div>
            <div className={`text-sm ${theme.text.tertiary}`}>{t("eras")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetsList;
