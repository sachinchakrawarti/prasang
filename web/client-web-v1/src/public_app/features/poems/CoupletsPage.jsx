// src/public_app/features/poems/CoupletsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaSearch,
  FaFilter,
  FaGlobe,
  FaLanguage,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { coupletsData } from "./CoupletData";
import CoupletCard from "./CoupletCard";

const CoupletsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedPoet, setSelectedPoet] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const { theme, themeName } = useTheme();

  // Get unique languages
  const languages = ["all", ...new Set(coupletsData.map((c) => c.language))];

  // Get unique poets
  const poets = ["all", ...new Set(coupletsData.map((c) => c.poet.name))];

  // Filter couplets
  const filteredCouplets = coupletsData.filter((couplet) => {
    const matchesSearch =
      couplet.original.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      couplet.poet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (couplet.themes &&
        couplet.themes.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase()),
        ));

    const matchesLanguage =
      selectedLanguage === "all" || couplet.language === selectedLanguage;
    const matchesPoet =
      selectedPoet === "all" || couplet.poet.name === selectedPoet;

    return matchesSearch && matchesLanguage && matchesPoet;
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

  const getButtonClass = (isActive) => {
    if (isActive) {
      switch (themeName) {
        case "forest":
          return "bg-green-500 text-white hover:bg-green-600";
        case "lavender":
          return "bg-purple-500 text-white hover:bg-purple-600";
        case "rose":
          return "bg-rose-500 text-white hover:bg-rose-600";
        case "sepia":
          return "bg-amber-600 text-white hover:bg-amber-700";
        case "dark":
          return "bg-gray-600 text-white hover:bg-gray-700";
        default:
          return "bg-amber-500 text-white hover:bg-amber-600";
      }
    }
    return `bg-gray-100 ${theme.text.secondary} hover:bg-gray-200`;
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

  const getLanguageButtonClass = (isActive, lang) => {
    if (isActive) {
      switch (themeName) {
        case "forest":
          return "bg-green-500 text-white shadow-lg";
        case "lavender":
          return "bg-purple-500 text-white shadow-lg";
        case "rose":
          return "bg-rose-500 text-white shadow-lg";
        case "sepia":
          return "bg-amber-600 text-white shadow-lg";
        case "dark":
          return "bg-gray-600 text-white shadow-lg";
        default:
          return "bg-amber-500 text-white shadow-lg";
      }
    }
    return `${theme.background.card} hover:shadow-md`;
  };

  const headerGradient = getHeaderGradient();
  const activeFilterClass = getActiveFilterClass();
  const statsGradient = getStatsGradient();

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme.background.primary}`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaFeather
              className={`text-5xl ${theme.icon.primary} animate-float`}
            />
            <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span
            className={`bg-gradient-to-r ${headerGradient} bg-clip-text text-transparent`}
          >
            Poetry Couplets
          </span>
        </h1>
        <p className={theme.text.secondary + " max-w-2xl mx-auto"}>
          Explore beautiful couplets from poets around the world
        </p>
      </div>

      {/* Search and Filters */}
      <div
        className={`${theme.background.card} rounded-2xl shadow-lg p-6 mb-8 border ${theme.border.card}`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search couplets, poets, or themes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus}`}
            />
          </div>

          {/* Language Filter */}
          <div className="relative min-w-[180px]">
            <FaLanguage className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus} appearance-none bg-white`}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "all" ? "All Languages" : lang}
                </option>
              ))}
            </select>
          </div>

          {/* Poet Filter */}
          <div className="relative min-w-[180px]">
            <FaGlobe className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedPoet}
              onChange={(e) => setSelectedPoet(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus} appearance-none bg-white`}
            >
              {poets.map((poet) => (
                <option key={poet} value={poet}>
                  {poet === "all" ? "All Poets" : poet}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
          >
            <FaFilter /> {showFilters ? "Hide" : "Show"} Filters
          </button>
        </div>

        {/* Active Filters */}
        {(selectedLanguage !== "all" ||
          selectedPoet !== "all" ||
          searchTerm) && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className={`text-sm ${theme.text.tertiary}`}>
              Active filters:
            </span>
            {selectedLanguage !== "all" && (
              <span
                className={`px-3 py-1 ${activeFilterClass} rounded-full text-sm flex items-center gap-1`}
              >
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button onClick={() => setSelectedLanguage("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedPoet !== "all" && (
              <span
                className={`px-3 py-1 ${activeFilterClass} rounded-full text-sm flex items-center gap-1`}
              >
                <FaGlobe className="text-xs" /> {selectedPoet}
                <button onClick={() => setSelectedPoet("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {searchTerm && (
              <span
                className={`px-3 py-1 ${activeFilterClass} rounded-full text-sm flex items-center gap-1`}
              >
                <FaSearch className="text-xs" /> "{searchTerm}"
                <button onClick={() => setSearchTerm("")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className={`text-sm ${theme.text.tertiary}`}>
          Showing{" "}
          <span className={`font-semibold ${theme.text.accent}`}>
            {filteredCouplets.length}
          </span>{" "}
          of {coupletsData.length} couplets
        </p>
      </div>

      {/* Couplets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCouplets.map((couplet) => (
          <CoupletCard key={couplet.id} coupletId={couplet.id} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCouplets.length === 0 && (
        <div
          className={`text-center py-16 ${theme.background.secondary} rounded-2xl`}
        >
          <FaFeather
            className={`text-5xl ${theme.icon.secondary} mx-auto mb-4`}
          />
          <h3 className={`text-xl font-semibold ${theme.text.primary} mb-2`}>
            No couplets found
          </h3>
          <p className={theme.text.tertiary}>
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Stats Section */}
      <div
        className={`mt-16 bg-gradient-to-r ${statsGradient} rounded-2xl p-8`}
      >
        <h2 className={`text-2xl font-bold text-center mb-6`}>
          <span
            className={`bg-gradient-to-r ${headerGradient} bg-clip-text text-transparent`}
          >
            Couplets by Language
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {languages.slice(1).map((lang) => {
            const count = coupletsData.filter(
              (c) => c.language === lang,
            ).length;
            const isActive = selectedLanguage === lang;

            return (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`group text-center p-4 rounded-xl transition-all ${
                  isActive
                    ? getLanguageButtonClass(true, lang)
                    : getLanguageButtonClass(false, lang)
                }`}
              >
                <div
                  className={`text-2xl mb-2 ${
                    isActive ? "text-white" : theme.icon.primary
                  }`}
                >
                  {lang === "Hindi" && "🇮🇳"}
                  {lang === "Urdu" && "🇵🇰"}
                  {lang === "Japanese" && "🇯🇵"}
                  {lang === "Arabic" && "🇸🇦"}
                  {lang === "Persian" && "🇮🇷"}
                  {lang === "French" && "🇫🇷"}
                </div>
                <div
                  className={`font-semibold ${
                    isActive
                      ? "text-white"
                      : `${theme.text.primary} group-hover:${theme.text.accent}`
                  }`}
                >
                  {lang}
                </div>
                <div
                  className={`text-sm ${
                    isActive ? "text-white/80" : theme.text.tertiary
                  }`}
                >
                  {count} couplets
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoupletsPage;
