// src/public_app/features/poems/CoupletDetailPage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaQuoteLeft,
  FaQuoteRight,
  FaLanguage,
  FaUser,
  FaGlobe,
  FaCalendarAlt,
  FaTags,
  FaRobot,
  FaChevronDown,
  FaChevronUp,
  FaBookmark,
  FaShare,
  FaCopy,
  FaHeart,
  FaComment,
  FaEye,
} from "react-icons/fa";
import { coupletsData, getCoupletById } from "./CoupletData";

const CoupletDetailPage = () => {
  const { id } = useParams();
  const [couplet, setCouplet] = useState(null);
  const [showRomanization, setShowRomanization] = useState(true);
  const [showTranslations, setShowTranslations] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState("english");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [relatedCouplets, setRelatedCouplets] = useState([]);

  useEffect(() => {
    const foundCouplet = getCoupletById(id);
    setCouplet(foundCouplet);

    // Find related couplets (same poet or language)
    if (foundCouplet) {
      const related = coupletsData
        .filter(
          (c) =>
            c.id !== foundCouplet.id &&
            (c.poet.name === foundCouplet.poet.name ||
              c.language === foundCouplet.language),
        )
        .slice(0, 3);
      setRelatedCouplets(related);
    }
  }, [id]);

  if (!couplet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Couplet Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The couplet you're looking for doesn't exist.
          </p>
          <Link to="/couplets" className="text-amber-600 hover:text-amber-700">
            ← Back to Couplets
          </Link>
        </div>
      </div>
    );
  }

  const translationLanguages = [
    { code: "english", name: "English" },
    { code: "hindi", name: "हिन्दी" },
    { code: "urdu", name: "اردو" },
    { code: "arabic", name: "العربية" },
    { code: "persian", name: "فارسی" },
    { code: "french", name: "Français" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isRTL =
    couplet.language === "urdu" ||
    couplet.language === "arabic" ||
    couplet.language === "persian";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/couplets"
        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Couplets
      </Link>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaQuoteLeft className="text-white/80 text-2xl" />
              <div>
                <span className="text-lg font-medium">{couplet.form}</span>
                <span className="ml-3 text-sm bg-white/20 px-3 py-1 rounded-full">
                  {couplet.language}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full transition ${
                  saved
                    ? "bg-amber-600 text-white"
                    : "bg-white/20 hover:bg-white/30"
                }`}
                title={saved ? "Remove from saved" : "Save couplet"}
              >
                <FaBookmark size={16} />
              </button>
              <button
                onClick={() => handleCopy(couplet.original.text)}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition relative"
                title="Copy text"
              >
                <FaCopy size={16} />
                {copied && (
                  <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
              <button
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                title="Share"
              >
                <FaShare size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Poet Info */}
        <div className="px-6 py-4 bg-amber-50/50 border-b border-amber-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {couplet.poet.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {couplet.poet.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <FaGlobe size={12} /> {couplet.poet.region}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt size={12} /> {couplet.poet.era}
                </span>
                {couplet.year && (
                  <span className="flex items-center gap-1">
                    <FaQuoteRight size={12} /> {couplet.year}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Original Text Section */}
        <div className="p-8">
          <div className={`mb-6 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaLanguage className="text-amber-500" />
                Original {couplet.language}
              </h2>
              <button
                onClick={() => setShowRomanization(!showRomanization)}
                className={`text-sm px-4 py-2 rounded-full transition ${
                  showRomanization
                    ? "bg-amber-500 text-white"
                    : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                }`}
              >
                {showRomanization ? "Hide" : "Show"} Romanization
              </button>
            </div>

            {/* Original text */}
            <div className="space-y-3 font-serif">
              {couplet.original.text.split("\n").map((line, idx) => (
                <p key={idx} className="text-2xl text-gray-800 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Romanization */}
            {showRomanization && couplet.original.romanization && (
              <div className="mt-6 pt-6 border-t border-amber-100">
                <p className="text-sm text-gray-500 mb-3">Romanization:</p>
                {couplet.original.romanization.split("\n").map((line, idx) => (
                  <p key={idx} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* AI Translations */}
          <div className="mt-8 border-t border-amber-100 pt-6">
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition mb-4"
            >
              <FaRobot
                className={
                  showTranslations ? "text-amber-600" : "text-gray-400"
                }
                size={18}
              />
              <span className="font-medium text-lg">AI Translations</span>
              {showTranslations ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showTranslations && (
              <div className="space-y-4">
                {/* Language Selector */}
                <div className="flex flex-wrap gap-2">
                  {translationLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedTranslation(lang.code)}
                      className={`px-4 py-2 rounded-lg text-sm transition ${
                        selectedTranslation === lang.code
                          ? "bg-amber-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>

                {/* Selected Translation */}
                <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FaRobot className="text-purple-500" />
                    <span className="font-medium text-gray-700">
                      Translation in{" "}
                      {
                        translationLanguages.find(
                          (l) => l.code === selectedTranslation,
                        )?.name
                      }
                    </span>
                  </div>
                  <div className="space-y-2">
                    {couplet.aiTranslations[selectedTranslation]
                      ?.split("\n")
                      .map((line, idx) => (
                        <p key={idx} className="text-gray-700">
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Themes */}
          {couplet.themes && couplet.themes.length > 0 && (
            <div className="mt-6 pt-4 border-t border-amber-100">
              <div className="flex items-center gap-2 mb-3">
                <FaTags className="text-amber-500" />
                <span className="font-medium text-gray-700">Themes</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {couplet.themes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Poet Bio */}
          {couplet.poet.bio && (
            <div className="mt-6 pt-4 border-t border-amber-100">
              <div className="flex items-center gap-2 mb-3">
                <FaUser className="text-amber-500" />
                <span className="font-medium text-gray-700">
                  About the Poet
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {couplet.poet.bio}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Couplets */}
      {relatedCouplets.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            More Couplets You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedCouplets.map((related) => (
              <Link
                key={related.id}
                to={`/couplet/${related.id}`}
                className="group bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1 border border-amber-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {related.poet.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition">
                      {related.poet.name}
                    </h3>
                    <p className="text-xs text-gray-500">{related.language}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic line-clamp-2">
                  "{related.original.text.split("\n")[0]}"
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoupletDetailPage;
