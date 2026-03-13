// src/public_app/features/poems/components/PoemsTypes.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaLanguage,
  FaUser,
  FaQuoteLeft,
  FaSearch,
  FaFilter,
  FaTimes,
  FaHeart,
  FaStar,
  FaBookmark,
} from "react-icons/fa";
import poemTypes, { regions } from "./poemtypes";

const PoemsTypes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [savedTypes, setSavedTypes] = useState([]);

  // Get unique languages
  const languages = [
    "all",
    ...new Set(poemTypes.map((type) => type.language.split(",")[0].trim())),
  ];

  // Filter poem types
  const filteredTypes = poemTypes.filter((type) => {
    const matchesSearch =
      type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.famousPoets.some((poet) =>
        poet.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesRegion =
      selectedRegion === "all" ||
      type.region.toLowerCase().includes(selectedRegion.toLowerCase());

    const matchesLanguage =
      selectedLanguage === "all" ||
      type.language.toLowerCase().includes(selectedLanguage.toLowerCase());

    return matchesSearch && matchesRegion && matchesLanguage;
  });

  const toggleSave = (id) => {
    setSavedTypes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Poetry Forms Around the World
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the diverse and beautiful structures of poetry from every
          corner of the globe
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, description, or poet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Region Filter */}
          <div className="relative min-w-[180px]">
            <FaGlobe className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region.id} value={region.name}>
                  {region.flag} {region.name} ({region.count})
                </option>
              ))}
            </select>
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
        </div>

        {/* Active Filters */}
        {(selectedRegion !== "all" || selectedLanguage !== "all") && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedRegion !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaGlobe className="text-xs" /> {selectedRegion}
                <button onClick={() => setSelectedRegion("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedLanguage !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button onClick={() => setSelectedLanguage("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Showing {filteredTypes.length} of {poemTypes.length} poetry forms
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition">
            A-Z
          </button>
          <button className="px-3 py-1 text-sm bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition">
            Region
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTypes.map((type) => (
          <div
            key={type.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100"
          >
            {/* Card Header with Gradient */}
            <div className={`h-32 bg-gradient-to-r ${type.color} p-6 relative`}>
              <div className="flex justify-between items-start">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <type.icon className="text-3xl text-white" />
                </div>
                <button
                  onClick={() => toggleSave(type.id)}
                  className={`p-2 rounded-full transition ${
                    savedTypes.includes(type.id)
                      ? "bg-amber-500 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <FaBookmark className="text-sm" />
                </button>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs text-white flex items-center gap-1">
                  <FaHeart className="text-rose-300" />{" "}
                  {Math.floor(Math.random() * 200) + 50}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Title and Region */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {type.name}
                </h2>
                <div className="flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1 text-amber-600">
                    <FaGlobe className="text-xs" /> {type.region}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <FaLanguage className="text-xs" /> {type.language}
                  </span>
                </div>
              </div>

              {/* Origin Info */}
              <div className="bg-amber-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500">Origin: {type.origin}</p>
                {type.popularizedIn && (
                  <p className="text-xs text-gray-500 mt-1">
                    Popularized in: {type.popularizedIn}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {type.description}
              </p>

              {/* Structure */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Structure
                </h4>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg italic">
                  {type.structure}
                </p>
              </div>

              {/* Famous Poets */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2 flex items-center gap-1">
                  <FaUser className="text-amber-500" /> Famous Poets
                </h4>
                <div className="flex flex-wrap gap-1">
                  {type.famousPoets.map((poet, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-amber-100 hover:text-amber-700 transition"
                    >
                      {poet}
                    </span>
                  ))}
                </div>
              </div>

              {/* Example */}
              {type.example && (
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 mb-4">
                  <FaQuoteLeft className="text-amber-300 text-sm mb-2" />
                  <p className="text-sm text-gray-700 italic">
                    "{type.example}"
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <Link
                  to={type.path}
                  className="flex-1 text-center bg-gradient-to-r from-amber-500 to-yellow-500 
  text-white py-2 rounded-lg hover:from-amber-600 hover:to-yellow-600 
  transition-all shadow-md hover:shadow-lg text-sm font-medium"
                >
                  View Poems
                </Link>
                <Link
                  to={`/literature/forms/${type.id}`}
                  className="px-4 py-2 border-2 border-amber-500 text-amber-600 
                    rounded-lg hover:bg-amber-50 transition text-sm font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTypes.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaFilter className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No poetry forms found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Regional Stats */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Poetry Forms by Region
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.name)}
              className="group text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <span className="text-4xl mb-2 block">{region.flag}</span>
              <div className="font-semibold text-gray-800 group-hover:text-amber-600 transition">
                {region.name}
              </div>
              <div className="text-sm text-gray-500">{region.count} forms</div>
            </button>
          ))}
        </div>
      </div>

      {/* Did You Know? */}
      <div className="mt-8 bg-amber-500 rounded-2xl p-6 text-white text-center">
        <FaStar className="text-3xl mx-auto mb-3 text-yellow-200" />
        <h3 className="text-xl font-bold mb-2">Did You Know?</h3>
        <p className="text-amber-100 max-w-2xl mx-auto">
          The Ghazal, originating in 7th century Arabia, has been adopted by
          poets across South Asia, Persia, and even Germany. It's one of the
          most widely adapted poetry forms!
        </p>
      </div>
    </div>
  );
};

export default PoemsTypes;
