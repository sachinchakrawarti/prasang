// src/public_app/pages/TestPageDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaFeather,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaLanguage,
  FaBookOpen,
  FaUser,
  FaGlobe,
  FaCalendarAlt,
  FaTags,
  FaInfoCircle,
  FaGraduationCap,
  FaRobot,
  FaDownload,
  FaShare,
  FaBookmark,
} from "react-icons/fa";
import masnavi1 from "../data/poem/iran/rumi/masnavi/masnavi_000001";
import masnavi2 from "../data/poem/iran/rumi/masnavi/masnavi_000002";

// Combine poems data
const poems = [masnavi1.poetryCard, masnavi2.poetryCard];

const TestPageDetails = () => {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);
  const [showRomanization, setShowRomanization] = useState(true);
  const [selectedTranslation, setSelectedTranslation] = useState(
    "Reynold A. Nicholson",
  );
  const [selectedAiLang, setSelectedAiLang] = useState("English");
  const [saved, setSaved] = useState(false);
  const [showAllTranslations, setShowAllTranslations] = useState(false);

  useEffect(() => {
    const foundPoem = poems.find((p) => p.id === id);
    setPoem(foundPoem);
  }, [id]);

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Poem Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The poem you're looking for doesn't exist.
          </p>
          <Link to="/test" className="text-amber-600 hover:text-amber-700">
            ← Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  // Get unique translators
  const translators = [
    ...new Set(poem.translations.map((t) => t.translator.name)),
  ];

  // Get AI translation languages
  const aiLanguages = Object.keys(poem.aiTranslations || {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/test"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to Collection
        </Link>

        {/* Poem Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 mb-8">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-8 text-white relative">
            <div className="absolute inset-0 opacity-10">
              <FaFeather className="absolute top-5 right-5 text-8xl rotate-12" />
              <FaFeather className="absolute bottom-5 left-5 text-8xl -rotate-12" />
            </div>

            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold mb-3">{poem.title}</h1>
                  <p className="text-amber-100 text-lg italic">
                    {poem.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`p-3 rounded-full transition ${
                    saved
                      ? "bg-amber-600 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <FaBookmark size={20} />
                </button>
              </div>

              {/* Poet Info */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {poem.poet.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{poem.poet.name}</h2>
                  <p className="text-amber-100">
                    {poem.poet.nameTransliteration}
                  </p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1">
                      <FaGlobe /> {poem.poet.geography.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {poem.poet.geography.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Original Text Section */}
          <div className="p-8 border-b border-amber-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaLanguage className="text-amber-500" />
                Original {poem.original.lang}
              </h3>
              <button
                onClick={() => setShowRomanization(!showRomanization)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  showRomanization
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {showRomanization ? "Hide" : "Show"} Romanization
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8" dir="rtl">
              <div className="space-y-4">
                {poem.original.lines.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-2xl font-serif text-gray-800 text-right"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {showRomanization && (
                <div className="space-y-4" dir="ltr">
                  {poem.original.romanization.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 italic border-l-4 border-amber-400 pl-4"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Human Translations */}
          <div className="p-8 border-b border-amber-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaBookOpen className="text-amber-500" />
              Scholarly Translations
            </h3>

            {/* Translator Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {translators.map((translator) => (
                <button
                  key={translator}
                  onClick={() => setSelectedTranslation(translator)}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    selectedTranslation === translator
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {translator}
                </button>
              ))}
            </div>

            {/* Selected Translation */}
            {poem.translations
              .filter((t) => t.translator.name === selectedTranslation)
              .map((trans, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {trans.translator.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {trans.translator.credentials}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-amber-200 text-amber-800 rounded-full">
                      {trans.publicationYear}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {trans.lines.map((line, lineIdx) => (
                      <p key={lineIdx} className="text-gray-700 italic">
                        "{line}"
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Source: {trans.publication}
                  </p>
                </div>
              ))}

            {/* Show All Translations Button */}
            <button
              onClick={() => setShowAllTranslations(!showAllTranslations)}
              className="mt-4 text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
            >
              {showAllTranslations
                ? "Show less"
                : "View all translations in other languages"}
              {showAllTranslations ? "↑" : "↓"}
            </button>

            {/* All Translations Grid */}
            {showAllTranslations && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {poem.translations
                  .filter((t) => t.translator.name !== selectedTranslation)
                  .map((trans, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-4 border border-amber-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-800">
                          {trans.lang}
                        </span>
                        <span className="text-xs text-gray-500">
                          {trans.translator.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 italic line-clamp-2">
                        "{trans.lines[0]}"
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* AI Translations */}
          {poem.aiTranslations && (
            <div className="p-8 border-b border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaRobot className="text-amber-500" />
                AI Translations
              </h3>

              {/* Language Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                {aiLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedAiLang(lang)}
                    className={`px-3 py-1 rounded-lg text-xs transition ${
                      selectedAiLang === lang
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Selected AI Translation */}
              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaRobot className="text-purple-500" />
                  <span className="font-medium text-gray-700">
                    AI Translation in {selectedAiLang}
                  </span>
                </div>
                <div className="space-y-2">
                  {poem.aiTranslations[selectedAiLang]?.map((line, idx) => (
                    <p key={idx} className="text-gray-700">
                      "{line}"
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Scholarly Explanation */}
          {poem.scholarlyExplanations &&
            poem.scholarlyExplanations.length > 0 && (
              <div className="p-8 border-b border-amber-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaGraduationCap className="text-amber-500" />
                  Scholarly Explanation
                </h3>

                {poem.scholarlyExplanations.map((exp, idx) => (
                  <div key={idx} className="bg-amber-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {exp.short}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {exp.detailed}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-amber-600">
                        — {exp.author.name}
                      </span>
                      <span className="text-gray-500">
                        {exp.source}, {exp.sourceYear}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {exp.author.credentials}
                    </p>
                  </div>
                ))}
              </div>
            )}

          {/* AI Explanation */}
          {poem.aiExplanation && (
            <div className="p-8 border-b border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaRobot className="text-amber-500" />
                AI Explanation
              </h3>

              <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  {poem.aiExplanation.short}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {poem.aiExplanation.detailed}
                </p>
              </div>
            </div>
          )}

          {/* Context */}
          {poem.context && (
            <div className="p-8 border-b border-amber-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaInfoCircle className="text-amber-500" />
                Historical Context
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Historical
                  </h4>
                  <p className="text-sm text-gray-600">
                    {poem.context.historicalBackground}
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Literary</h4>
                  <p className="text-sm text-gray-600">
                    {poem.context.literarySignificance}
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural</h4>
                  <p className="text-sm text-gray-600">
                    {poem.context.culturalImpact}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tags and Themes */}
          <div className="p-8">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaTags className="text-amber-500" /> Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {poem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaStar className="text-amber-500" /> Themes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {poem.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation and Actions */}
        <div className="flex justify-between items-center">
          <Link
            to="/test"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Collection
          </Link>
          <div className="flex gap-3">
            <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition">
              <FaShare size={18} />
            </button>
            <button className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition">
              <FaDownload size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPageDetails;
