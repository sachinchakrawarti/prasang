// src/public_app/features/home/components/ExploreMonostich.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFeather,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaUser,
  FaLanguage,
  FaRobot,
} from "react-icons/fa";
import { useTheme } from "../../../../theme";
import { useLanguage } from "../../../../context/LanguageContext";
import { translateExplore } from "../../../../locales/exploreMonostichTranslations";

// Monostich data for the slider
const monostichData = [
  {
    id: "english-1",
    text: "After great pain, a formal feeling comes –",
    poet: "Emily Dickinson",
    country: "USA",
    language: "English",
    translation: "बड़े दर्द के बाद, एक औपचारिक सी भावना आती है",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "hindi-1",
    text: "कोई दिया जले तो रोशनी भी होगी।",
    poet: "Nida Fazli",
    country: "India",
    language: "Hindi",
    romanization: "Koi diya jale to roshni bhi hogi",
    translation: "If a lamp is lit, there will be light too.",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "urdu-1",
    text: "اب کے ہم بچھڑے تو شاید کبھی خوابوں میں ملیں",
    poet: "Joun Elia",
    country: "Pakistan",
    language: "Urdu",
    romanization: "Ab ke hum bichhde to shayad kabhi khwabon mein milein",
    translation: "If we part now, perhaps we'll meet in dreams someday",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "arabic-1",
    text: "وما نيل المطالب بالتمني",
    poet: "Al-Mutanabbi",
    country: "Iraq",
    language: "Arabic",
    romanization: "Wa ma nail al-matalib bil-tamanni",
    translation: "Goals are not achieved by mere wishes",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "persian-1",
    text: "عمریست تا به گوش دلم می‌رسد این راز",
    poet: "Hafez",
    country: "Iran",
    language: "Persian",
    romanization: "Omrist ta be gush-e delam mi-rasad in raz",
    translation: "For an age, this secret reaches my heart's ear",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "french-1",
    text: "Le temps n'efface rien, il ajoute seulement du silence.",
    poet: "Christian Bobin",
    country: "France",
    language: "French",
    translation: "Time erases nothing, it only adds silence.",
    color: "from-sky-500 to-blue-500",
  },
  {
    id: "english-2",
    text: "I am the master of my fate, I am the captain of my soul.",
    poet: "William Ernest Henley",
    country: "England",
    language: "English",
    translation: "मैं अपनी किस्मत का मालिक हूं, मैं अपनी आत्मा का कप्तान हूं",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "urdu-2",
    text: "ہم سے پہلی سی محبت میرے محبوب نہ مانگ",
    poet: "Faiz Ahmed Faiz",
    country: "Pakistan",
    language: "Urdu",
    romanization: "Hum se pehli si mohabbat mere mehboob na maang",
    translation: "Do not ask me for that same love again, my beloved",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "persian-2",
    text: "تا چند اسیر رنگ و بویِ دامِ جهان باشیم",
    poet: "Rumi",
    country: "Persia",
    language: "Persian",
    romanization: "Ta chand asir-e rang o buy-e dam-e jahan bashim",
    translation:
      "How long will we be captive to the color and scent of the world's snare?",
    color: "from-violet-500 to-purple-500",
  },
];

const ExploreMonostich = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRomanization, setShowRomanization] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { theme, themeName } = useTheme();
  const { language } = useLanguage();

  // Translation helper
  const t = (text) => translateExplore(text, language);

  const currentMonostich = monostichData[currentIndex];
  const isRTL =
    currentMonostich.language === "Urdu" ||
    currentMonostich.language === "Arabic" ||
    currentMonostich.language === "Persian";

  // Theme-based helper functions
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-600";
      case "lavender":
        return "from-purple-600 to-pink-600";
      case "rose":
        return "from-rose-600 to-pink-600";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      case "dark":
        return "from-gray-700 to-gray-800";
      default:
        return "from-amber-600 to-yellow-600";
    }
  };

  const getDotColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-500";
      case "lavender":
        return "bg-purple-500";
      case "rose":
        return "bg-rose-500";
      case "sepia":
        return "bg-amber-500";
      case "dark":
        return "bg-gray-400";
      default:
        return "bg-amber-500";
    }
  };

  const getButtonHoverColor = () => {
    switch (themeName) {
      case "forest":
        return "hover:text-green-700";
      case "lavender":
        return "hover:text-purple-700";
      case "rose":
        return "hover:text-rose-700";
      case "sepia":
        return "hover:text-amber-700";
      case "dark":
        return "hover:text-gray-300";
      default:
        return "hover:text-amber-700";
    }
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % monostichData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + monostichData.length) % monostichData.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % monostichData.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const headerGradient = getHeaderGradient();
  const dotColor = getDotColor();
  const buttonHoverColor = getButtonHoverColor();

  return (
    <div className={`${theme.background.gradient} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <FaFeather
                className={`text-5xl ${theme.icon.primary} animate-float`}
              />
              <FaStar className="text-yellow-400 absolute -top-2 -right-2 text-lg animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span
              className={`bg-gradient-to-r ${headerGradient} bg-clip-text text-transparent`}
            >
              {t("title")}
            </span>
          </h2>
          <p className={`${theme.text.secondary} max-w-2xl mx-auto`}>
            {t("subtitle")}
          </p>
        </div>

        {/* Main Slider Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 ${theme.background.card} rounded-full shadow-lg hover:shadow-xl transition ${theme.text.accent} ${buttonHoverColor}`}
            aria-label={t("previous")}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 ${theme.background.card} rounded-full shadow-lg hover:shadow-xl transition ${theme.text.accent} ${buttonHoverColor}`}
            aria-label={t("next")}
          >
            <FaArrowRight size={20} />
          </button>

          {/* Main Card */}
          <div
            className={`bg-gradient-to-r ${currentMonostich.color} rounded-3xl p-8 shadow-2xl transition-all duration-500`}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <FaQuoteLeft className="absolute top-5 left-5 text-white text-6xl" />
              <FaQuoteRight className="absolute bottom-5 right-5 text-white text-6xl" />
            </div>

            <div className="relative">
              {/* Header with Poet Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {currentMonostich.poet.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {currentMonostich.poet}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex items-center gap-1">
                        <FaGlobe size={12} /> {currentMonostich.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaLanguage size={12} /> {currentMonostich.language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Text */}
              <div className={`mb-6 ${isRTL ? "text-right" : "text-left"}`}>
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-serif leading-relaxed">
                  {currentMonostich.text}
                </p>
              </div>

              {/* Romanization Toggle */}
              {currentMonostich.romanization && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowRomanization(!showRomanization)}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <FaLanguage size={16} />
                    <span className="text-sm font-medium">
                      {showRomanization
                        ? t("hideRomanization")
                        : t("showRomanization")}
                    </span>
                  </button>
                  {showRomanization && (
                    <div className="mt-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <p className="text-white/90 italic">
                        {currentMonostich.romanization}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Translation Toggle */}
              {currentMonostich.translation && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowTranslation(!showTranslation)}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <FaRobot size={16} />
                    <span className="text-sm font-medium">
                      {showTranslation
                        ? t("hideTranslation")
                        : t("showTranslation")}
                    </span>
                  </button>
                  {showTranslation && (
                    <div className="mt-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <p className="text-white/90">
                        "{currentMonostich.translation}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Explore Button */}
              <div className="flex justify-center mt-8">
                <Link
                  to="/monostich"
                  className={`inline-flex items-center gap-2 ${theme.background.card} ${theme.text.accent} px-6 py-3 rounded-full font-semibold ${theme.background.cardHover} transition shadow-lg hover:shadow-xl`}
                >
                  <FaFeather />
                  <span>{t("exploreAll")}</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {monostichData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? `w-8 ${dotColor}`
                    : `w-2 ${dotColor} opacity-50 hover:opacity-75`
                }`}
                aria-label={`${t("goTo")} ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm ${theme.text.accent} hover:${theme.text.accentHover} transition`}
            >
              {isAutoPlaying ? `⏸️ ${t("pause")}` : `▶️ ${t("play")}`}{" "}
              {t("slideshow")}
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div
            className={`${theme.background.card} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition border ${theme.border.card}`}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
              <FaGlobe className="text-white text-2xl" />
            </div>
            <h3 className={`text-lg font-bold ${theme.text.primary} mb-2`}>
              6+ {t("languages")}
            </h3>
            <p className={`${theme.text.secondary} text-sm`}>
              {t("languagesDesc")}
            </p>
          </div>
          <div
            className={`${theme.background.card} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition border ${theme.border.card}`}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
              <FaUser className="text-white text-2xl" />
            </div>
            <h3 className={`text-lg font-bold ${theme.text.primary} mb-2`}>
              8+ {t("poets")}
            </h3>
            <p className={`${theme.text.secondary} text-sm`}>
              {t("poetsDesc")}
            </p>
          </div>
          <div
            className={`${theme.background.card} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition border ${theme.border.card}`}
          >
            <div
              className={`w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4`}
            >
              <FaRobot className="text-white text-2xl" />
            </div>
            <h3 className={`text-lg font-bold ${theme.text.primary} mb-2`}>
              {t("translations")}
            </h3>
            <p className={`${theme.text.secondary} text-sm`}>
              {t("translationsDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMonostich;
