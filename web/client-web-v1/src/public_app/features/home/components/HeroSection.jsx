// src/public_app/components/HeroSection.jsx
import { Link } from "react-router-dom";
import { FaFeather, FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "../../../../theme";
import { useLanguage } from "../../../../context/LanguageContext";
import { translateHero } from "../../../../locales/herosectionTranslations";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();

  const poemsByLanguage = {
    en: [
      {
        id: 1,
        poet: "William Shakespeare",
        poem: "Shall I compare thee to a summer's day?",
        work: "Sonnet 18",
      },
      {
        id: 2,
        poet: "William Shakespeare",
        poem: "Love is not love which alters when it alteration finds",
        work: "Sonnet 116",
      },
      {
        id: 3,
        poet: "William Shakespeare",
        poem: "We are such stuff as dreams are made on",
        work: "The Tempest",
      },
    ],
    hi: [
      {
        id: 4,
        poet: "अल्लामा इक़बाल",
        poem: "मुझ को जन्नत से निकाला हुआ इंसाँ समझा",
        work: "जवाब-ए-शिकवा",
      },
      {
        id: 5,
        poet: "अल्लामा इक़बाल",
        poem: "सितारों से आगे जहाँ और भी हैं",
        work: "सितारों से आगे",
      },
    ],
    ur: [
      {
        id: 6,
        poet: "پروین شاکر",
        poem: "کچھ تو ہوا بھی سرد تھی کچھ تھا ترا خیال بھی",
        work: "محبت",
      },
      {
        id: 7,
        poet: "پروین شاکر",
        poem: "خوشبو کی طرح پھیلا ہوں میں فضا میں",
        work: "خوشبو",
      },
    ],
  };

  const currentPoems = poemsByLanguage[language] || poemsByLanguage.en;

  useEffect(() => {
    setCurrentIndex(0);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentPoems.length);
    }, 90000);
    return () => clearInterval(interval);
  }, [language, currentPoems.length]);

  const currentPoem = currentPoems[currentIndex];

  // Translation helper
  const t = (text, params) => translateHero(text, language, params);

  // Theme-based gradient helpers
  const getHeroGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-500 via-emerald-500 to-green-600";
      case "lavender":
        return "from-purple-500 via-pink-500 to-purple-600";
      case "rose":
        return "from-rose-500 via-pink-500 to-rose-600";
      case "sepia":
        return "from-amber-600 via-yellow-600 to-amber-700";
      case "dark":
        return "from-gray-800 via-gray-900 to-gray-800";
      default:
        return "from-amber-400 via-yellow-400 to-amber-500";
    }
  };

  const getShadowColor = () => {
    switch (themeName) {
      case "forest":
        return "shadow-green-200/50";
      case "lavender":
        return "shadow-purple-200/50";
      case "rose":
        return "shadow-rose-200/50";
      case "sepia":
        return "shadow-amber-300/50";
      case "dark":
        return "shadow-gray-800/50";
      default:
        return "shadow-amber-200/50";
    }
  };

  const getAccentColor = () => {
    switch (themeName) {
      case "forest":
        return "text-emerald-900";
      case "lavender":
        return "text-purple-900";
      case "rose":
        return "text-rose-900";
      case "sepia":
        return "text-amber-900";
      case "dark":
        return "text-gray-100";
      default:
        return "text-amber-900";
    }
  };

  const getQuoteIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-emerald-300";
      case "lavender":
        return "text-purple-300";
      case "rose":
        return "text-rose-300";
      case "sepia":
        return "text-amber-300";
      case "dark":
        return "text-gray-300";
      default:
        return "text-amber-300";
    }
  };

  const getPoetColor = () => {
    switch (themeName) {
      case "forest":
        return "text-emerald-200";
      case "lavender":
        return "text-purple-200";
      case "rose":
        return "text-rose-200";
      case "sepia":
        return "text-amber-200";
      case "dark":
        return "text-gray-200";
      default:
        return "text-amber-200";
    }
  };

  const getDotColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-emerald-500";
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

  const heroGradient = getHeroGradient();
  const shadowColor = getShadowColor();
  const accentColor = getAccentColor();
  const quoteIconColor = getQuoteIconColor();
  const poetColor = getPoetColor();
  const dotColor = getDotColor();

  return (
    <section
      className={`relative w-full bg-gradient-to-r ${heroGradient} text-white overflow-hidden shadow-xl ${shadowColor}`}
    >
      {/* Decorative Elements - Full width */}
      <div className="absolute inset-0 opacity-10 w-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/30 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content Container - Centered with max width */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <FaFeather className={`text-5xl text-white animate-float`} />
            <FaStar className="text-yellow-200 absolute -top-2 -right-2 text-lg animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-3 font-serif">
          {t("welcome", { name: "Prasang" })}
        </h1>

        <p
          className={`text-lg md:text-xl mb-10 ${
            themeName === "dark" ? "text-gray-300" : "text-amber-100"
          } max-w-2xl mx-auto`}
        >
          {t("subtitle")}
        </p>

        {/* Poem Slider Card */}
        <div className="max-w-2xl mx-auto mt-4 animate-fadeIn">
          <div
            className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl`}
          >
            <div className="flex justify-between mb-4">
              <FaQuoteLeft
                className={`${quoteIconColor} text-2xl opacity-50`}
              />
              <FaQuoteRight
                className={`${quoteIconColor} text-2xl opacity-50`}
              />
            </div>

            <p className="text-xl md:text-2xl italic mb-4 font-serif leading-relaxed">
              "{currentPoem.poem}"
            </p>

            <div className="mt-6">
              <p className="text-sm text-white/80 mt-1">{currentPoem.work}</p>
              <p className={`text-lg font-semibold ${poetColor}`}>
                — {currentPoem.poet}
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {currentPoems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? `w-8 ${dotColor}`
                      : `w-2 ${dotColor} opacity-50 hover:opacity-75`
                  }`}
                  aria-label={t("goToPoem")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
