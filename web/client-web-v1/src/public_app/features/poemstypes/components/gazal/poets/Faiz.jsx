// src/public_app/features/poemstypes/components/gazal/poets/Faiz.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeart,
  FaBookmark,
  FaShare,
  FaLanguage,
  FaQuoteLeft,
  FaQuoteRight,
  FaFeather,
  FaStar,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";
import faizGhazals from "./faizGhazals.json";

const Faiz = () => {
  const { lang } = useParams();
  const [selectedLang, setSelectedLang] = useState(lang || "english");
  const [savedGhazals, setSavedGhazals] = useState([]);
  const [expandedGhazal, setExpandedGhazal] = useState(null);

  const poet = faizGhazals.poet;
  const ghazals = faizGhazals.ghazals;

  const languages = [
    { code: "urdu", name: "اردو", flag: "🇵🇰", native: "Urdu" },
    { code: "hindi", name: "हिन्दी", flag: "🇮🇳", native: "Hindi" },
    { code: "english", name: "English", flag: "🇬🇧", native: "English" },
    { code: "persian", name: "فارسی", flag: "🇮🇷", native: "Persian" },
    { code: "french", name: "Français", flag: "🇫🇷", native: "French" },
  ];

  useEffect(() => {
    if (lang) {
      setSelectedLang(lang);
    }
  }, [lang]);

  const toggleSave = (id) => {
    setSavedGhazals((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const getTranslation = (ghazal, language) => {
    if (language === "urdu") {
      return {
        title: ghazal.title,
        firstLine: ghazal.original.firstLine,
        text: ghazal.original.text,
      };
    }
    const translation = ghazal.translations.find(
      (t) => t.language === language,
    );
    return (
      translation || ghazal.translations.find((t) => t.language === "english")
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/poems-types/gazal"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Faiz Ahmed Faiz
      </Link>

      {/* Poet Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FaFeather className="absolute top-5 right-5 text-8xl rotate-12" />
          <FaFeather className="absolute bottom-5 left-5 text-8xl -rotate-12" />
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img
              src={poet.image}
              alt={poet.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {poet.name}{" "}
              <span className="text-2xl text-emerald-200">
                {poet.nativeName}
              </span>
            </h1>
            <p className="text-emerald-100 mb-3">
              {poet.birthYear} - {poet.deathYear} · {poet.birthPlace}
            </p>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <FaLanguage className="text-amber-500" />
          Select Translation Language
        </h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                selectedLang === lang.code
                  ? "bg-amber-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              <span className="text-xs opacity-75">{lang.native}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Ghazals Grid */}
      <div className="space-y-8">
        {ghazals.map((ghazal) => {
          const translation = getTranslation(ghazal, selectedLang);
          const isExpanded = expandedGhazal === ghazal.id;

          return (
            <div
              key={ghazal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-amber-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      Ghazal #{ghazal.number}
                    </span>
                    <h2 className="text-xl font-bold">{ghazal.title}</h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSave(ghazal.id)}
                      className={`p-2 rounded-full transition ${
                        savedGhazals.includes(ghazal.id)
                          ? "bg-amber-600 text-white"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <FaBookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Original Urdu */}
                <div className="mb-8 text-right border-b pb-4" dir="rtl">
                  <h3 className="text-sm text-amber-600 mb-2 flex justify-end items-center gap-2">
                    <span>اصل اردو</span>
                    <FaFeather className="text-amber-400" />
                  </h3>
                  <p className="text-xl font-serif text-gray-800 leading-loose mb-2">
                    {ghazal.original.firstLine}
                  </p>
                  <p className="text-gray-600 whitespace-pre-line font-serif leading-loose">
                    {ghazal.original.text}
                  </p>
                </div>

                {/* Translation */}
                {selectedLang !== "urdu" && translation && (
                  <div className="mb-6">
                    <h3 className="text-sm text-amber-600 mb-2 flex items-center gap-2">
                      <FaQuoteLeft className="text-amber-400" />
                      Translation (
                      {languages.find((l) => l.code === selectedLang)?.name})
                    </h3>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      {translation.title}
                    </h4>

                    {/* First Line */}
                    <p className="text-amber-600 italic mb-4 border-l-4 border-amber-400 pl-4">
                      "{translation.firstLine}"
                    </p>

                    {/* Full Text - Show only when expanded */}
                    {isExpanded && (
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-4">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {translation.text}
                        </p>
                        {translation.notes && (
                          <p className="text-sm text-gray-500 mt-4 italic border-t border-amber-200 pt-4">
                            Note: {translation.notes}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() =>
                        setExpandedGhazal(isExpanded ? null : ghazal.id)
                      }
                      className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                    >
                      {isExpanded ? "Show less ↑" : "Read full translation ↓"}
                    </button>
                  </div>
                )}

                {/* Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <FaCalendarAlt className="text-amber-500" /> {ghazal.year}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <FaBookOpen className="text-amber-500" />{" "}
                      {ghazal.collection}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-rose-500">
                      <FaHeart /> {ghazal.likes}
                    </span>
                  </div>
                </div>

                {/* Themes */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {ghazal.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faiz;
