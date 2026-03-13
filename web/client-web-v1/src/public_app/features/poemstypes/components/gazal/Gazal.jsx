// src/public_app/features/poemstypes/components/gazal/Gazal.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaGlobe,
  FaLanguage,
  FaCalendarAlt,
  FaQuoteLeft,
  FaBookOpen,
  FaUser,
  FaArrowLeft,
  FaAward,
  FaWikipediaW,
  FaBookmark,
  FaHeart,
} from "react-icons/fa";
import faizData from "./faizData.json";

const Gazal = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [savedGhazals, setSavedGhazals] = useState([]);

  const poet = faizData.poet;
  const currentLang = poet.languages.find((l) => l.code === selectedLanguage);
  const content = currentLang?.content;

  const languages = poet.languages.map((l) => ({
    code: l.code,
    name: l.name,
    nativeName: l.nativeName,
    flag: l.flag,
    color: l.color,
  }));

  const toggleSave = (title, e) => {
    e.stopPropagation();
    setSavedGhazals((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  if (!currentLang || !content) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/poems-types"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Poetry Types
      </Link>

      {/* Header - Everything changes with language */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaFeather className="text-5xl text-amber-500 animate-float" />
            <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            {content.pageTitle}
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {content.pageSubtitle}
        </p>
      </div>

      {/* Language Switcher - Label changes with language */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <FaLanguage className="text-amber-500" />
          {content.languageLabel}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`group relative px-5 py-3 rounded-xl transition-all ${
                selectedLanguage === lang.code
                  ? `bg-gradient-to-r ${lang.color} text-white shadow-lg scale-105`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-xl mr-2">{lang.flag}</span>
              <span className="font-medium">{lang.nativeName}</span>
              {selectedLanguage === lang.code && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - EVERYTHING changes with language */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
        {/* Header with Gradient */}
        <div className={`h-56 bg-gradient-to-r ${currentLang.color} relative`}>
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <FaFeather className="absolute top-5 right-5 text-8xl rotate-12" />
            <FaFeather className="absolute bottom-5 left-5 text-8xl -rotate-12" />
          </div>

          {/* Language Badge */}
          <div className="absolute top-4 left-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold flex items-center gap-2">
              <span className="text-xl">{currentLang.flag}</span>
              {currentLang.nativeName}
            </span>
          </div>

          {/* Awards Badge */}
          <div className="absolute top-4 right-6">
            <div className="flex gap-2">
              {content.awards.slice(0, 2).map((award, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                >
                  🏆 {award.name}
                </span>
              ))}
            </div>
          </div>

          {/* Poet Info */}
          <div className="absolute bottom-4 left-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {poet.name}
            </h2>
            <p className="text-white/80 text-sm flex items-center gap-2">
              <FaGlobe /> {poet.birthPlace} - {poet.deathPlace}
              <span className="mx-2">•</span>
              <FaCalendarAlt /> {poet.birthYear} - {poet.deathYear}
            </p>
          </div>
        </div>

        {/* Content Sections - All in selected language */}
        <div className="p-8">
          {/* Bio Section - Changes with language */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaUser className="text-amber-500" /> {content.aboutTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">{content.bio}</p>
          </div>

          {/* Famous Works - Changes with language */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaBookOpen className="text-amber-500" /> {content.worksTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.famousWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="bg-amber-50 rounded-xl p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{work.title}</h4>
                    <span className="text-xs px-2 py-1 bg-amber-200 text-amber-800 rounded-full">
                      {work.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {work.translation}
                  </p>
                  <p className="text-xs text-gray-500">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Ghazals - Changes with language */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaHeart className="text-amber-500" /> {content.ghazalsTitle}
            </h3>
            <div className="space-y-6">
              {content.popularGhazals.map((ghazal, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {ghazal.title}
                      </h4>
                      <p className="text-sm text-amber-600">
                        {ghazal.translation}
                      </p>
                    </div>
                    <button
                      onClick={(e) => toggleSave(ghazal.title, e)}
                      className={`p-2 rounded-full transition ${
                        savedGhazals.includes(ghazal.title)
                          ? "bg-amber-500 text-white"
                          : "bg-white text-gray-400 hover:text-amber-500"
                      }`}
                    >
                      <FaBookmark size={16} />
                    </button>
                  </div>

                  <FaQuoteLeft className="text-amber-300 text-xl mb-2" />
                  <p className="text-gray-700 italic mb-3 font-serif">
                    "{ghazal.firstLine}"
                  </p>
                  <p className="text-sm text-gray-600 whitespace-pre-line mb-3">
                    {ghazal.fullText}
                  </p>
                  <p className="text-xs text-gray-500 italic">{ghazal.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quotes - Changes with language */}
          {content.quotes && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {content.quotesTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-l-4 border-amber-400 bg-gray-50 rounded-r-xl"
                  >
                    <p className="text-gray-700 italic">"{quote.text}"</p>
                    <p className="text-xs text-gray-500 mt-2">
                      — {quote.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards - Changes with language */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaAward className="text-amber-500" /> {content.awardsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-amber-100 rounded-lg"
                >
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {award.name}
                    </h4>
                    <p className="text-sm text-gray-600">{award.description}</p>
                    <p className="text-xs text-amber-600 mt-1">
                      {award.year} {award.status && `· ${award.status}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons - Changes with language */}
          <div className="flex gap-4 mt-6">
            <Link
              to={`/poems-types/gazal/faiz/${selectedLanguage}`}
              className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all text-center font-medium"
            >
              {content.readButton.replace("{language}", currentLang.name)}
            </Link>

            <a
              href={poet.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-all font-medium flex items-center gap-2"
            >
              <FaWikipediaW /> {content.wikipediaButton}
            </a>
          </div>
        </div>
      </div>

      {/* Language Overview - Changes with language */}
      <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            {content.overviewTitle.replace("{poetName}", poet.name)}
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`group text-center p-4 rounded-xl transition-all ${
                selectedLanguage === lang.code
                  ? `bg-gradient-to-r ${lang.color} text-white shadow-lg`
                  : "bg-white hover:shadow-md"
              }`}
            >
              <span className="text-3xl mb-2 block">{lang.flag}</span>
              <div
                className={`font-semibold ${
                  selectedLanguage === lang.code
                    ? "text-white"
                    : "text-gray-800 group-hover:text-amber-600"
                }`}
              >
                {lang.name}
              </div>
              <div
                className={`text-xs mt-1 ${
                  selectedLanguage === lang.code
                    ? "text-white/80"
                    : "text-gray-500"
                }`}
              >
                {lang.nativeName}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gazal;
