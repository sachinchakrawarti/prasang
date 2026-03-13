// src/public_app/features/poets/poetslist/PoetsList.jsx
import { useState } from "react";
import {
  FaUserGraduate,
  FaGlobe,
  FaLanguage,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { poetsData } from "../../../data/poetsdata/poets_data_eng";
import PoetsCard from "../poetsdetails/components/PoetsCard";

const PoetsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");

  // Get unique languages for filter
  const languages = [
    "all",
    ...new Set(poetsData.map((poet) => poet.language.split(",")[0].trim())),
  ];

  // Get unique eras/periods for filter
  const eras = [
    "all",
    ...new Set(poetsData.map((poet) => poet.period.split(",")[0].trim())),
  ];

  // Filter poets based on search and filters
  const filteredPoets = poetsData.filter((poet) => {
    const matchesSearch =
      poet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poet.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poet.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage =
      selectedLanguage === "all" ||
      poet.language.toLowerCase().includes(selectedLanguage.toLowerCase());

    const matchesEra =
      selectedEra === "all" ||
      poet.period.toLowerCase().includes(selectedEra.toLowerCase());

    return matchesSearch && matchesLanguage && matchesEra;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Our Poets
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the voices that have shaped poetry across centuries and
          cultures
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search poets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Language Filter */}
          <div className="relative">
            <FaLanguage className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "all" ? "All Languages" : lang}
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none"
            >
              {eras.map((era) => (
                <option key={era} value={era}>
                  {era === "all" ? "All Eras" : era}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedLanguage !== "all" || selectedEra !== "all") && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedLanguage !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaLanguage className="text-xs" /> {selectedLanguage}
                <button
                  onClick={() => setSelectedLanguage("all")}
                  className="ml-1 hover:text-amber-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedEra !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaCalendarAlt className="text-xs" /> {selectedEra}
                <button
                  onClick={() => setSelectedEra("all")}
                  className="ml-1 hover:text-amber-900"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Poets Grid */}
      {filteredPoets.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaUserGraduate className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No poets found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoets.map((poet) => (
            <PoetsCard key={poet.id} poet={poet} />
          ))}
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poetsData.length}
            </div>
            <div className="text-sm text-gray-600">Total Poets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poetsData.reduce(
                (acc, poet) => acc + poet.famousWorks.length,
                0,
              )}
            </div>
            <div className="text-sm text-gray-600">Famous Works</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {languages.length - 1}
            </div>
            <div className="text-sm text-gray-600">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {eras.length - 1}
            </div>
            <div className="text-sm text-gray-600">Eras</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetsList;
