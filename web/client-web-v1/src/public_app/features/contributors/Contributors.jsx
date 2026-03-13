// src/public_app/features/contributors/Contributors.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFeatherAlt,
  FaGlobe,
  FaLanguage,
  FaGraduationCap,
  FaBookOpen,
  FaQuoteLeft,
  FaSearch,
  FaFilter,
  FaTimes,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaUserGraduate,
  FaPenFancy,
  FaComment,
} from "react-icons/fa";
import { contributorsData } from "../../data/contributors/ContributorsData";

const Contributors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [savedContributors, setSavedContributors] = useState([]);

  // Get unique roles and countries for filters
  const roles = ["all", ...new Set(contributorsData.map((c) => c.roleType))];
  const countries = ["all", ...new Set(contributorsData.map((c) => c.country))];

  // Filter contributors
  const filteredContributors = contributorsData.filter((contributor) => {
    const matchesSearch =
      contributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contributor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contributor.expertise.some((e) =>
        e.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesRole =
      selectedRole === "all" || contributor.roleType === selectedRole;
    const matchesCountry =
      selectedCountry === "all" || contributor.country === selectedCountry;

    return matchesSearch && matchesRole && matchesCountry;
  });

  const toggleSave = (id) => {
    setSavedContributors((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // Role labels for display
  const roleLabels = {
    translators: "Translators",
    scholars: "Scholars",
    editors: "Editors",
    commentators: "Commentators",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaUsers className="text-5xl text-amber-500 animate-float" />
            <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Contributors
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the scholars, translators, editors, and commentators who bring
          poetry to life
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
              placeholder="Search contributors by name, bio, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Role Filter */}
          <div className="relative min-w-[180px]">
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role === "all" ? "All Roles" : roleLabels[role] || role}
                </option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div className="relative min-w-[180px]">
            <FaGlobe className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country === "all" ? "All Countries" : country}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
          >
            <FaFilter /> {showFilters ? "Hide" : "Show"} Advanced
          </button>
        </div>

        {/* Active Filters */}
        {(selectedRole !== "all" ||
          selectedCountry !== "all" ||
          searchTerm) && (
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedRole !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaUserGraduate className="text-xs" />{" "}
                {roleLabels[selectedRole]}
                <button onClick={() => setSelectedRole("all")}>
                  <FaTimes className="text-xs hover:text-amber-900" />
                </button>
              </span>
            )}
            {selectedCountry !== "all" && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                <FaGlobe className="text-xs" /> {selectedCountry}
                <button onClick={() => setSelectedCountry("all")}>
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
            {filteredContributors.length}
          </span>{" "}
          of {contributorsData.length} contributors
        </p>
      </div>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContributors.map((contributor) => (
          <div
            key={contributor.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100"
          >
            {/* Card Header with Gradient */}
            <div
              className={`h-32 bg-gradient-to-r ${contributor.color} p-4 relative`}
            >
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs text-white flex items-center gap-1">
                  <FaUserGraduate size={10} /> {contributor.role}
                </span>
              </div>
              <div className="absolute -bottom-10 left-4">
                <div className="w-20 h-20 rounded-xl border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        contributor.name,
                      )}&background=amber&color=fff&size=80`;
                    }}
                  />
                </div>
              </div>

              {/* Featured Badge */}
              {contributor.featured && (
                <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <FaStar size={10} /> Featured
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="pt-12 p-5">
              {/* Name and Country */}
              <div className="mb-3">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-600 transition">
                  {contributor.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaGlobe className="text-amber-500" /> {contributor.country}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-amber-500" />{" "}
                    {contributor.era}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                {contributor.bio}
              </p>

              {/* Credentials */}
              <div className="bg-amber-50 rounded-lg p-2 mb-3">
                <p className="text-xs text-gray-600 line-clamp-2">
                  {contributor.credentials}
                </p>
              </div>

              {/* Expertise */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  Expertise:
                </p>
                <div className="flex flex-wrap gap-1">
                  {contributor.expertise.slice(0, 2).map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs"
                    >
                      {exp}
                    </span>
                  ))}
                  {contributor.expertise.length > 2 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                      +{contributor.expertise.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
                  <FaLanguage className="text-amber-500" /> Languages:
                </p>
                <div className="flex flex-wrap gap-1">
                  {contributor.languages.slice(0, 3).map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {lang}
                    </span>
                  ))}
                  {contributor.languages.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-400 rounded text-xs">
                      +{contributor.languages.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="flex items-center gap-1 text-amber-600">
                  <FaBookOpen /> {contributor.contributions} contributions
                </span>
                <span className="flex items-center gap-1 text-purple-600">
                  <FaPenFancy /> {contributor.publications} publications
                </span>
              </div>

              {/* Notable Works Preview */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  Notable works:
                </p>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  {contributor.notableWorks.slice(0, 2).map((work, idx) => (
                    <li key={idx} className="truncate">
                      {work.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards Preview */}
              {contributor.awards && contributor.awards.length > 0 && (
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {contributor.awards.slice(0, 1).map((award, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs flex items-center gap-1"
                      >
                        <FaStar size={8} /> {award.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => toggleSave(contributor.id)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                    savedContributors.includes(contributor.id)
                      ? "bg-amber-500 text-white"
                      : "border border-amber-500 text-amber-600 hover:bg-amber-50"
                  }`}
                >
                  {savedContributors.includes(contributor.id)
                    ? "Saved"
                    : "Save"}
                </button>
                <Link
                  to={`/contributor/${contributor.id}`}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-2 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition text-sm font-medium text-center"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredContributors.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaUsers className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No contributors found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Contributors by Role
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(roleLabels).map(([key, label]) => {
            const count = contributorsData.filter(
              (c) => c.roleType === key,
            ).length;
            return (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`group text-center p-4 rounded-xl transition-all ${
                  selectedRole === key
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white hover:shadow-md"
                }`}
              >
                <div
                  className={`text-2xl mb-2 ${
                    selectedRole === key ? "text-white" : "text-amber-500"
                  }`}
                >
                  {key === "translators" && "📚"}
                  {key === "scholars" && "🎓"}
                  {key === "editors" && "✏️"}
                  {key === "commentators" && "💬"}
                </div>
                <div
                  className={`font-semibold ${
                    selectedRole === key
                      ? "text-white"
                      : "text-gray-800 group-hover:text-amber-600"
                  }`}
                >
                  {label}
                </div>
                <div
                  className={`text-sm ${
                    selectedRole === key ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {count} contributors
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contributors;
