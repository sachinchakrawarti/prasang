// src/public_app/features/poems/Couplet.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  FaEye,
  FaComment,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { coupletsData, getCoupletById } from "./CoupletData";

// Main Couplet Display Component
const CoupletDisplay = ({ couplet }) => {
  const [showRomanization, setShowRomanization] = useState(true);
  const [showTranslations, setShowTranslations] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState("english");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme, themeName } = useTheme();

  const isRTL =
    couplet.language === "urdu" ||
    couplet.language === "arabic" ||
    couplet.language === "persian";

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

  // Theme-based helper functions
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-500 to-emerald-500";
      case "lavender":
        return "from-purple-500 to-pink-500";
      case "rose":
        return "from-rose-500 to-pink-500";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      case "dark":
        return "from-gray-700 to-gray-800";
      default:
        return "from-amber-500 to-yellow-500";
    }
  };

  const getQuoteColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-200";
      case "lavender":
        return "text-purple-200";
      case "rose":
        return "text-rose-200";
      case "sepia":
        return "text-amber-300";
      case "dark":
        return "text-gray-500";
      default:
        return "text-amber-200";
    }
  };

  const getRomanizationColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-300";
      case "lavender":
        return "border-purple-300";
      case "rose":
        return "border-rose-300";
      case "sepia":
        return "border-amber-400";
      case "dark":
        return "border-gray-600";
      default:
        return "border-amber-300";
    }
  };

  const headerGradient = getHeaderGradient();
  const quoteColor = getQuoteColor();
  const romanizationBorder = getRomanizationColor();

  return (
    <div
      className={`${theme.background.card} rounded-3xl shadow-2xl overflow-hidden border ${theme.border.card}`}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} p-6 text-white`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaQuoteLeft className="text-white/80 text-2xl" />
            <div>
              <span className="text-lg font-medium">{couplet.form}</span>
              <span
                className={`ml-3 text-sm bg-white/20 px-3 py-1 rounded-full`}
              >
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
      <div
        className={`px-6 py-4 ${theme.background.secondary} border-b ${theme.border.light}`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${headerGradient} rounded-full flex items-center justify-center text-white text-xl font-bold`}
          >
            {couplet.poet.name.charAt(0)}
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${theme.text.primary}`}>
              {couplet.poet.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm mt-1">
              <span
                className={`flex items-center gap-1 ${theme.text.secondary}`}
              >
                <FaGlobe size={12} className={theme.icon.primary} />{" "}
                {couplet.poet.region}
              </span>
              <span
                className={`flex items-center gap-1 ${theme.text.secondary}`}
              >
                <FaCalendarAlt size={12} className={theme.icon.primary} />{" "}
                {couplet.poet.era}
              </span>
              {couplet.year && (
                <span
                  className={`flex items-center gap-1 ${theme.text.secondary}`}
                >
                  <FaQuoteRight size={12} className={theme.icon.primary} />{" "}
                  {couplet.year}
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
            <h2
              className={`text-lg font-semibold ${theme.text.primary} flex items-center gap-2`}
            >
              <FaLanguage className={theme.icon.primary} />
              Original {couplet.language}
            </h2>
            <button
              onClick={() => setShowRomanization(!showRomanization)}
              className={`text-sm px-4 py-2 rounded-full transition ${
                showRomanization
                  ? `${theme.button.primary}`
                  : `${theme.button.ghost}`
              }`}
            >
              {showRomanization ? "Hide" : "Show"} Romanization
            </button>
          </div>

          {/* Original text */}
          <div className="space-y-3 font-serif">
            {couplet.original.text.split("\n").map((line, idx) => (
              <p
                key={idx}
                className={`text-2xl ${theme.text.primary} leading-relaxed`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Romanization */}
          {showRomanization && couplet.original.romanization && (
            <div className={`mt-6 pt-6 border-t ${theme.border.light}`}>
              <p className={`text-sm ${theme.text.tertiary} mb-3`}>
                Romanization:
              </p>
              {couplet.original.romanization.split("\n").map((line, idx) => (
                <p key={idx} className={theme.text.secondary}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* AI Translations */}
        <div className={`mt-8 border-t ${theme.border.light} pt-6`}>
          <button
            onClick={() => setShowTranslations(!showTranslations)}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition mb-4"
          >
            <FaRobot
              className={showTranslations ? "text-amber-600" : "text-gray-400"}
              size={18}
            />
            <span className={`font-medium text-lg ${theme.text.primary}`}>
              AI Translations
            </span>
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
                        ? `${theme.button.primary}`
                        : `${theme.button.ghost}`
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              {/* Selected Translation */}
              <div
                className={`bg-gradient-to-r from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/20 rounded-xl p-6`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaRobot className="text-purple-500" />
                  <span className={`font-medium ${theme.text.primary}`}>
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
                      <p key={idx} className={theme.text.secondary}>
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
          <div className={`mt-6 pt-4 border-t ${theme.border.light}`}>
            <div className="flex items-center gap-2 mb-3">
              <FaTags className={theme.icon.primary} />
              <span className={`font-medium ${theme.text.primary}`}>
                Themes
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {couplet.themes.map((theme, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-lg text-sm`}
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Poet Bio */}
        {couplet.poet.bio && (
          <div className={`mt-6 pt-4 border-t ${theme.border.light}`}>
            <div className="flex items-center gap-2 mb-3">
              <FaUser className={theme.icon.primary} />
              <span className={`font-medium ${theme.text.primary}`}>
                About the Poet
              </span>
            </div>
            <p className={`${theme.text.secondary} leading-relaxed`}>
              {couplet.poet.bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Couplet Detail Page Component
export const CoupletDetailPage = () => {
  const { id } = useParams();
  const [couplet, setCouplet] = useState(null);
  const [relatedCouplets, setRelatedCouplets] = useState([]);
  const { theme } = useTheme();

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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div
          className={`text-center py-12 ${theme.background.secondary} rounded-2xl`}
        >
          <h2 className={`text-xl font-bold ${theme.text.primary} mb-2`}>
            Couplet Not Found
          </h2>
          <p className={theme.text.secondary}>
            The couplet you're looking for doesn't exist.
          </p>
          <Link
            to="/couplets"
            className={`mt-4 inline-block ${theme.link.primary}`}
          >
            ← Back to Couplets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/couplets"
        className={`inline-flex items-center gap-2 ${theme.link.primary} mb-6 group`}
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Couplets
      </Link>

      {/* Main Couplet Display */}
      <CoupletDisplay couplet={couplet} />

      {/* Related Couplets */}
      {relatedCouplets.length > 0 && (
        <div className="mt-12">
          <h2 className={`text-2xl font-bold ${theme.text.primary} mb-6`}>
            More Couplets You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedCouplets.map((related) => (
              <Link
                key={related.id}
                to={`/couplet/${related.id}`}
                className={`group ${theme.background.card} rounded-xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1 border ${theme.border.card}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {related.poet.name.charAt(0)}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${theme.text.primary} group-hover:${theme.text.accent} transition`}
                    >
                      {related.poet.name}
                    </h3>
                    <p className={`text-xs ${theme.text.tertiary}`}>
                      {related.language}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-sm ${theme.text.secondary} italic line-clamp-2`}
                >
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

export default CoupletDisplay;
