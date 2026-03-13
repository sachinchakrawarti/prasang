// src/public_app/features/poemstypes/components/sonnets/Sonnets.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaQuoteLeft,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";
import SonnetsCard from "./SonnetsCard";

const poets = [
  {
    id: "william-shakespeare",
    name: "William Shakespeare",
    country: "England",
    era: "1564-1616",
    sonnetsCount: 154,
    preview:
      "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate.",
    famousSonnet: "Sonnet 18",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/William_Shakespeare_by_John_Taylor%2C_edited.jpg/960px-William_Shakespeare_by_John_Taylor%2C_edited.jpg",
    color: "from-rose-500 to-red-500",
    path: "/sonnets/william-shakespeare",
  },
  {
    id: "john-keats",
    name: "John Keats",
    country: "England",
    era: "1795-1821",
    sonnetsCount: 64,
    preview:
      "Bright star, would I were steadfast as thou art—\nNot in lone splendour hung aloft the night.",
    famousSonnet: "Bright Star",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/John_Keats_by_William_Hilton.jpg/800px-John_Keats_by_William_Hilton.jpg",
    color: "from-blue-500 to-indigo-500",
    path: "/sonnets/john-keats",
  },
  {
    id: "elizabeth-browning",
    name: "Elizabeth Barrett Browning",
    country: "England",
    era: "1806-1861",
    sonnetsCount: 44,
    preview:
      "How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height.",
    famousSonnet: "Sonnet 43",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Elizabeth_Barrett_Browning_-_Project_Gutenberg_eText_13700.jpg/800px-Elizabeth_Barrett_Browning_-_Project_Gutenberg_eText_13700.jpg",
    color: "from-purple-500 to-pink-500",
    path: "/sonnets/elizabeth-browning",
  },
  {
    id: "petrarch",
    name: "Petrarch",
    country: "Italy",
    era: "1304-1374",
    sonnetsCount: 366,
    preview:
      "Blessed be the day, and month, and year,\nSeason and time and hour and moment.",
    famousSonnet: "Sonnet 227",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Francesco_Petrarca_by_Andrea_di_Bartolomeo.jpg/800px-Francesco_Petrarca_by_Andrea_di_Bartolomeo.jpg",
    color: "from-amber-500 to-orange-500",
    path: "/sonnets/petrarch",
  },
  {
    id: "dante",
    name: "Dante Alighieri",
    country: "Italy",
    era: "1265-1321",
    sonnetsCount: 89,
    preview:
      "Love and the gentle heart are one same thing,\nEven as the sage in his dictation saith.",
    famousSonnet: "Vita Nuova",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dante_Alighieri_by_Andrea_di_Bartolomeo.jpg/800px-Dante_Alighieri_by_Andrea_di_Bartolomeo.jpg",
    color: "from-emerald-500 to-teal-500",
    path: "/sonnets/dante",
  },
];

const Sonnets = () => {
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
            Sonnets Through the Ages
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the most beautiful sonnets from master poets across centuries
          and continents
        </p>
      </div>

      {/* Stats Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📜</span>
            <div>
              <span className="font-bold text-gray-800">
                {poets.length} Poets
              </span>
              <p className="text-xs text-gray-500">Featured sonneteers</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <div>
              <span className="font-bold text-gray-800">
                {poets.reduce((acc, poet) => acc + poet.sonnetsCount, 0)}+
                Sonnets
              </span>
              <p className="text-xs text-gray-500">Across all collections</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <div>
              <span className="font-bold text-gray-800">
                {new Set(poets.map((p) => p.country)).size} Countries
              </span>
              <p className="text-xs text-gray-500">Global tradition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Poets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poets.map((poet) => (
          <SonnetsCard key={poet.id} poet={poet} />
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            About the Sonnet Form
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">📏</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Structure</h3>
            <p className="text-sm text-gray-600">
              14 lines, iambic pentameter, with various rhyme schemes
              (Shakespearean, Petrarchan, Spenserian)
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">❤️</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Themes</h3>
            <p className="text-sm text-gray-600">
              Love, beauty, time, mortality, nature, politics, faith, and the
              nature of poetry itself
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">📜</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Origin</h3>
            <p className="text-sm text-gray-600">
              Originated in 13th century Italy with Petrarch, popularized in
              England by Shakespeare and others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sonnets;
