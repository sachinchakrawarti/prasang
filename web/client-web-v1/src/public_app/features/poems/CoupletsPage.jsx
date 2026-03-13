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
import { coupletsData } from "./CoupletData";
import CoupletCard from "./CoupletCard";

const CoupletsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedPoet, setSelectedPoet] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaFeather className="text-5xl text-amber-500 animate-float" />
            <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Poetry Couplets
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore beautiful couplets from poets around the world
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search couplets, poets, or themes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Language Filter */}
          <div className="relative min-w-[180px]">
            <FaLanguage className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
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
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedLanguage !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button onClick={() => setSelectedLanguage("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedPoet !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaGlobe className="text-xs" /> {selectedPoet}
                <button onClick={() => setSelectedPoet("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
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
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-amber-600">
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
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaFeather className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No couplets found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Couplets by Language
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {languages.slice(1).map((lang) => {
            const count = coupletsData.filter(
              (c) => c.language === lang,
            ).length;
            return (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`group text-center p-4 rounded-xl transition-all ${
                  selectedLanguage === lang
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`text-2xl mb-2 ${
                    selectedLanguage === lang ? "text-white" : "text-amber-500"
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
                    selectedLanguage === lang
                      ? "text-white"
                      : "text-gray-800 group-hover:text-amber-600"
                  }`}
                >
                  {lang}
                </div>
                <div
                  className={`text-sm ${
                    selectedLanguage === lang
                      ? "text-white/80"
                      : "text-gray-500"
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
