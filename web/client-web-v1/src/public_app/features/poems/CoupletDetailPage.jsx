// src/public_app/features/poems/CoupletDetailPage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTts } from "tts-react";
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
  FaVolumeUp,
  FaPause,
  FaPlay,
  FaStop,
  FaSpinner,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { coupletsData, getCoupletById } from "./CoupletData";
import "./CoupletDetailPage.css";

const CoupletDetailPage = () => {
  const { id } = useParams();
  const [couplet, setCouplet] = useState(null);
  const [showRomanization, setShowRomanization] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState("english");
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [relatedCouplets, setRelatedCouplets] = useState([]);
  const [ttsSupported, setTtsSupported] = useState(true);

  const { theme, themeName } = useTheme();

  useEffect(() => {
    const foundCouplet = getCoupletById(id);
    setCouplet(foundCouplet);

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

    if (!window.speechSynthesis) {
      setTtsSupported(false);
    }
  }, [id]);

  const getTextToSpeak = () => {
    if (!couplet) return "";
    return couplet.original.text;
  };

  const getLanguageCode = () => {
    if (!couplet) return "en-US";
    switch (couplet.language?.toLowerCase()) {
      case "urdu":
        return "ur-PK";
      case "arabic":
        return "ar-SA";
      case "persian":
        return "fa-IR";
      case "hindi":
        return "hi-IN";
      default:
        return "en-US";
    }
  };

  const { ttsChildren, play, pause, stop, state } = useTts({
    children: getTextToSpeak(),
    lang: getLanguageCode(),
    markTextAsSpoken: true,
    markColor: "#f59e0b",
    rate: 0.9,
    autoPlay: false,
    onError: (error) => console.error("TTS Error:", error),
  });

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

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

  const getAvatarGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-400 to-emerald-400";
      case "lavender":
        return "from-purple-400 to-pink-400";
      case "rose":
        return "from-rose-400 to-pink-400";
      case "sepia":
        return "from-amber-500 to-yellow-500";
      case "dark":
        return "from-gray-600 to-gray-700";
      default:
        return "from-amber-400 to-yellow-400";
    }
  };

  const getRomanizationButtonClass = () => {
    if (showRomanization) {
      switch (themeName) {
        case "forest":
          return "bg-green-500 text-white";
        case "lavender":
          return "bg-purple-500 text-white";
        case "rose":
          return "bg-rose-500 text-white";
        case "sepia":
          return "bg-amber-600 text-white";
        case "dark":
          return "bg-gray-600 text-white";
        default:
          return "bg-amber-500 text-white";
      }
    }
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700 hover:bg-green-200";
      case "lavender":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200";
      case "rose":
        return "bg-rose-100 text-rose-700 hover:bg-rose-200";
      case "sepia":
        return "bg-amber-100 text-amber-700 hover:bg-amber-200";
      case "dark":
        return "bg-gray-700 text-gray-300 hover:bg-gray-600";
      default:
        return "bg-amber-100 text-amber-700 hover:bg-amber-200";
    }
  };

  const getTTSButtonClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400";
      case "lavender":
        return "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400";
      case "rose":
        return "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400";
      case "sepia":
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400";
      case "dark":
        return "bg-gray-700 text-gray-300 hover:bg-gray-600";
      default:
        return "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400";
    }
  };

  const getThemeBadgeClass = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 text-green-700";
      case "lavender":
        return "bg-purple-50 text-purple-700";
      case "rose":
        return "bg-rose-50 text-rose-700";
      case "sepia":
        return "bg-amber-100 text-amber-700";
      case "dark":
        return "bg-gray-700 text-gray-300";
      default:
        return "bg-amber-50 text-amber-700";
    }
  };

  const getRelatedCardHoverClass = () => {
    switch (themeName) {
      case "forest":
        return "group-hover:text-green-600";
      case "lavender":
        return "group-hover:text-purple-600";
      case "rose":
        return "group-hover:text-rose-600";
      case "sepia":
        return "group-hover:text-amber-700";
      case "dark":
        return "group-hover:text-gray-300";
      default:
        return "group-hover:text-amber-600";
    }
  };

  if (!couplet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>
            Couplet Not Found
          </h2>
          <p className={`${theme.text.secondary} mb-4`}>
            The couplet you're looking for doesn't exist.
          </p>
          <Link to="/couplets" className={theme.link.primary}>
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

  const headerGradient = getHeaderGradient();
  const avatarGradient = getAvatarGradient();
  const romanizationButtonClass = getRomanizationButtonClass();
  const ttsButtonClass = getTTSButtonClass();
  const themeBadgeClass = getThemeBadgeClass();
  const relatedCardHoverClass = getRelatedCardHoverClass();

  return (
    <div
      className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${theme.background.primary}`}
    >
      {/* Back Button */}
      <Link
        to="/couplets"
        className={`inline-flex items-center gap-2 ${theme.link.primary} mb-6 group`}
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
        Back to Couplets
      </Link>

      {/* Main Card */}
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
        <div
          className={`px-6 py-4 ${theme.background.secondary} border-b ${theme.border.light}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 bg-gradient-to-br ${avatarGradient} rounded-full flex items-center justify-center text-white text-xl font-bold`}
            >
              {couplet.poet.name.charAt(0)}
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${theme.text.primary}`}>
                {couplet.poet.name}
              </h1>
              <div
                className={`flex flex-wrap items-center gap-4 text-sm ${theme.text.secondary} mt-1`}
              >
                <span className="flex items-center gap-1">
                  <FaGlobe size={12} className={theme.icon.primary} />{" "}
                  {couplet.poet.region}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt size={12} className={theme.icon.primary} />{" "}
                  {couplet.poet.era}
                </span>
                {couplet.year && (
                  <span className="flex items-center gap-1">
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
              <div className="flex gap-2">
                {/* TTS Controls */}
                {ttsSupported && (
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                    {state.isPlaying || state.isPaused ? (
                      <>
                        <button
                          onClick={pause}
                          className={`p-2 rounded-full transition ${ttsButtonClass}`}
                          title="Pause"
                        >
                          <FaPause size={14} />
                        </button>
                        <button
                          onClick={stop}
                          className={`p-2 rounded-full transition ${ttsButtonClass}`}
                          title="Stop"
                        >
                          <FaStop size={14} />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={play}
                        className={`p-2 rounded-full transition ${ttsButtonClass}`}
                        title="Listen to poem"
                        disabled={state.isLoading}
                      >
                        {state.isLoading ? (
                          <FaSpinner className="animate-spin" size={14} />
                        ) : (
                          <FaPlay size={14} />
                        )}
                      </button>
                    )}
                  </div>
                )}
                <button
                  onClick={() => setShowRomanization(!showRomanization)}
                  className={`text-sm px-4 py-2 rounded-full transition ${romanizationButtonClass}`}
                >
                  {showRomanization ? "Hide" : "Show"} Romanization
                </button>
              </div>
            </div>

            {/* Poem Container */}
            <div className="poem-container">
              {/* Original text - Consistent styling whether TTS is active or not */}
              <div className="poem-original">
                {state.isPlaying || state.isPaused ? (
                  // Show highlighted text when TTS is active - with consistent styling
                  <div
                    className={`text-2xl ${theme.text.primary} leading-relaxed space-y-3`}
                  >
                    {ttsChildren}
                  </div>
                ) : (
                  // Show regular script text when TTS is not active
                  couplet.original.text.split("\n").map((line, idx) => (
                    <p
                      key={idx}
                      className={`text-2xl ${theme.text.primary} leading-relaxed`}
                    >
                      {line}
                    </p>
                  ))
                )}
              </div>

              {/* Romanization - Only shown when toggled ON */}
              {showRomanization && couplet.original.romanization && (
                <div className="poem-romanization mt-6 pt-6 border-t-2 border-dashed border-amber-300 dark:border-amber-700">
                  <p
                    className={`text-sm font-medium ${theme.text.accent} mb-3 flex items-center gap-2`}
                  >
                    <FaLanguage className={theme.icon.primary} />
                    Romanization:
                  </p>
                  {couplet.original.romanization
                    .split("\n")
                    .map((line, idx) => (
                      <p key={idx} className={`${theme.text.secondary} italic`}>
                        {line}
                      </p>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Translations */}
          <div className={`mt-8 border-t ${theme.border.light} pt-6`}>
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className={`flex items-center gap-2 ${theme.text.accent} hover:${theme.text.accentHover} transition mb-4`}
            >
              <FaRobot
                className={
                  showTranslations ? theme.icon.primary : "text-gray-400"
                }
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
                <div className="bg-gradient-to-r from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/20 rounded-xl p-6">
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
                    className={`px-3 py-1.5 ${themeBadgeClass} rounded-lg text-sm`}
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
                    className={`w-8 h-8 bg-gradient-to-br ${avatarGradient} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {related.poet.name.charAt(0)}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${theme.text.primary} ${relatedCardHoverClass} transition`}
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

export default CoupletDetailPage;
