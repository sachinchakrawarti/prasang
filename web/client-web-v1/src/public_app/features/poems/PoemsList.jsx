// src/public_app/features/poems/PoemsList.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaBookOpen,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaLanguage,
  FaUser,
  FaEye,
  FaComment,
  FaTags,
  FaGlobe,
  FaClock,
  FaFire,
} from "react-icons/fa";
import { poemsData, categories, languages } from "../../data/poems/poems_data";
import PoetryForms from "./PoetryForms";

const PoemsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [showFilters, setShowFilters] = useState(false);

  // Filter poems based on search and filters
  const filteredPoems = poemsData.filter((poem) => {
    const matchesSearch =
      poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poem.poet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poem.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poem.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" || poem.category === selectedCategory;

    const matchesLanguage =
      selectedLanguage === "all" || poem.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  // Sort poems
  const sortedPoems = [...filteredPoems].sort((a, b) => {
    switch (sortBy) {
      case "latest":
        return new Date(b.date) - new Date(a.date);
      case "popular":
        return b.likes - a.likes;
      case "reads":
        return b.reads - a.reads;
      default:
        return 0;
    }
  });

  // Get unique tags from all poems
  const allTags = [...new Set(poemsData.flatMap((poem) => poem.tags))];
  const popularTags = allTags.slice(0, 15);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Poems Collection
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover beautiful poetry from around the world
        </p>
      </div>

      <PoetryForms />

      {/* Popular Tags Cloud */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FaTags className="text-amber-500" />
          <h2 className="text-lg font-semibold text-gray-700">Popular Tags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, idx) => (
            <Link
              key={idx}
              to={`/tags/${tag}`}
              className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm 
                hover:bg-amber-100 hover:scale-105 transition-all"
            >
              #{tag}
            </Link>
          ))}
          <Link
            to="/tags"
            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm 
              hover:bg-gray-200 transition"
          >
            View All Tags →
          </Link>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search poems, poets, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative min-w-[150px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none bg-white"
            >
              <option value="latest">📅 Latest</option>
              <option value="popular">❤️ Most Liked</option>
              <option value="reads">👁️ Most Read</option>
            </select>
          </div>

          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      selectedCategory === "all"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-full text-sm transition ${
                        selectedCategory === category.name
                          ? `bg-${category.color}-500 text-white`
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Filter */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Language</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLanguage("all")}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      selectedLanguage === "all"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLanguage(lang.name)}
                      className={`px-4 py-2 rounded-full text-sm transition ${
                        selectedLanguage === lang.name
                          ? "bg-amber-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {lang.name} ({lang.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== "all" || selectedLanguage !== "all") && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Active filters:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "all" && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="ml-1 hover:text-amber-900"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedLanguage !== "all" && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                      {selectedLanguage}
                      <button
                        onClick={() => setSelectedLanguage("all")}
                        className="ml-1 hover:text-amber-900"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-500">
        Showing {sortedPoems.length} poems
      </div>

      {/* Poems Grid */}
      {sortedPoems.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <FaBookOpen className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No poems found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPoems.map((poem) => (
            <div
              key={poem.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Poem Image */}
              <Link
                to={`/poem/${poem.id}`}
                className="block h-48 overflow-hidden"
              >
                <img
                  src={poem.image}
                  alt={poem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </Link>

              {/* Poem Content */}
              <div className="p-6">
                {/* Category and Era */}
                <div className="flex justify-between items-start mb-3">
                  <Link
                    to={`/tags/${poem.category.toLowerCase()}`}
                    className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs hover:bg-amber-200 transition"
                  >
                    {poem.category}
                  </Link>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FaClock size={10} /> {poem.era}
                  </span>
                </div>

                {/* Title and Poet */}
                <Link to={`/poem/${poem.id}`}>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition">
                    {poem.title}
                  </h2>
                </Link>
                <Link
                  to={`/poet/${poem.poetId}`}
                  className="flex items-center gap-1 text-amber-600 text-sm mb-3 hover:underline"
                >
                  <FaUser size={12} /> {poem.poet}
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 italic mb-4 line-clamp-2">
                  "{poem.excerpt}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {poem.tags.slice(0, 3).map((tag, idx) => (
                    <Link
                      key={idx}
                      to={`/tags/${tag}`}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs hover:bg-amber-100 hover:text-amber-700 transition"
                    >
                      #{tag}
                    </Link>
                  ))}
                  {poem.tags.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-400 rounded text-xs">
                      +{poem.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-rose-500">
                      <FaHeart /> {poem.likes}
                    </span>
                    <span className="flex items-center gap-1 text-blue-500">
                      <FaEye /> {poem.reads}
                    </span>
                    <span className="flex items-center gap-1 text-green-500">
                      <FaComment /> {poem.comments}
                    </span>
                  </div>
                  <Link
                    to={`/poem/${poem.id}`}
                    className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
                  >
                    Read More <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poemsData.length}
            </div>
            <div className="text-sm text-gray-600">Total Poems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poemsData.reduce((acc, poem) => acc + poem.likes, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Likes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poemsData.reduce((acc, poem) => acc + poem.reads, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Reads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {poemsData.reduce((acc, poem) => acc + poem.comments, 0)}
            </div>
            <div className="text-sm text-gray-600">Comments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {[...new Set(poemsData.flatMap((poem) => poem.tags))].length}
            </div>
            <div className="text-sm text-gray-600">Unique Tags</div>
          </div>
        </div>
      </div>

      {/* Literature Words Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Explore poems by{" "}
          <Link to="/tags" className="text-amber-600 hover:underline">
            tags
          </Link>
          {" • "}
          <Link
            to="/literature/forms"
            className="text-amber-600 hover:underline"
          >
            poetry forms
          </Link>
          {" • "}
          <Link
            to="/literature/devices"
            className="text-amber-600 hover:underline"
          >
            literary devices
          </Link>
          {" • "}
          <Link
            to="/literature/eras"
            className="text-amber-600 hover:underline"
          >
            eras
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PoemsList;
