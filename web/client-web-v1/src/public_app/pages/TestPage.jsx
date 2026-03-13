// src/public_app/pages/TestPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaQuoteLeft,
  FaLanguage,
  FaBookOpen,
  FaUser,
  FaGlobe,
  FaCalendarAlt,
  FaTags,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle,
} from "react-icons/fa";

import masnavi1 from "../data/poem/iran/rumi/masnavi/masnavi_000001";
import masnavi2 from "../data/poem/iran/rumi/masnavi/masnavi_000002";

// Combine poems data
const poems = [masnavi1.poetryCard, masnavi2.poetryCard];

const TestPage = () => {
  const [showRomanization, setShowRomanization] = useState({});
  const [expandedPoem, setExpandedPoem] = useState(null);

  const toggleRomanization = (poemId, e) => {
    e.stopPropagation();
    setShowRomanization((prev) => ({
      ...prev,
      [poemId]: !prev[poemId],
    }));
  };

  const toggleExpand = (poemId) => {
    setExpandedPoem(expandedPoem === poemId ? null : poemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Rumi's Masnavi Collection
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the opening couplets of Rumi's spiritual masterpiece, the
            Masnavi-ye Ma'navi
          </p>
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-all"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{poem.title}</h2>
                    <p className="text-amber-100 text-sm italic">
                      {poem.subtitle}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs">Masnavi</span>
                  </div>
                </div>
              </div>

              {/* Poet Info */}
              <div className="px-6 py-4 bg-amber-50/50 border-b border-amber-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {poem.poet.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {poem.poet.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {poem.poet.geography.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Original Text */}
              <div className="p-6 border-b border-amber-100">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <FaLanguage className="text-amber-500" />
                    Original {poem.original.lang}
                  </h4>
                  <button
                    onClick={(e) => toggleRomanization(poem.id, e)}
                    className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition"
                  >
                    {showRomanization[poem.id] ? "Hide" : "Show"} Romanization
                  </button>
                </div>

                <div className="space-y-2" dir="rtl">
                  {poem.original.lines.map((line, idx) => (
                    <div key={idx} className="text-right">
                      <p className="text-xl font-serif text-gray-800">{line}</p>
                      {showRomanization[poem.id] && (
                        <p
                          className="text-xs text-gray-500 mt-1 text-left"
                          dir="ltr"
                        >
                          {poem.original.romanization[idx]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Translation Preview */}
              <div className="p-6 border-b border-amber-100">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaQuoteLeft className="text-amber-500" />
                  English Translation (Nicholson)
                </h4>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4">
                  {poem.translations
                    .filter(
                      (t) =>
                        t.lang === "English" &&
                        t.translator.name === "Reynold A. Nicholson",
                    )
                    .map((trans, idx) => (
                      <div key={idx} className="space-y-2">
                        {trans.lines.map((line, lineIdx) => (
                          <p key={lineIdx} className="text-gray-700 italic">
                            "{line}"
                          </p>
                        ))}
                      </div>
                    ))}
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 py-4 border-b border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <FaTags className="text-amber-500" />
                  <span className="text-sm font-medium text-gray-600">
                    Tags:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {poem.tags.slice(0, 6).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable Section */}
              <div className="px-6 py-4">
                <button
                  onClick={() => toggleExpand(poem.id)}
                  className="w-full flex items-center justify-between text-amber-600 hover:text-amber-700 transition"
                >
                  <span className="font-medium">View Full Details</span>
                  {expandedPoem === poem.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {expandedPoem === poem.id && (
                  <div className="mt-4 space-y-4">
                    {/* Collection Info */}
                    <div className="bg-amber-50 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        {poem.collection}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {poem.collectionDescription}
                      </p>
                    </div>

                    {/* Poem Type */}
                    <div className="border border-amber-100 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">
                        {poem.poemType}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {poem.poemTypeDescription}
                      </p>
                    </div>

                    {/* Themes */}
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">
                        Themes:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {poem.themes.map((theme, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Full Details Button */}
                    <Link
                      to={`/testpage/poem/${poem.id}`}
                      className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-center py-3 rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all font-medium"
                    >
                      <FaBookOpen className="inline mr-2" />
                      Read Complete Analysis
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
