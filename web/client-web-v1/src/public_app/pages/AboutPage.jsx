// src/public_app/pages/AboutPage.jsx
import { useState } from "react";
import {
  FaHeart,
  FaEnvelope,
  FaFeather,
  FaLeaf,
  FaStar,
  FaTwitter,
  FaInstagram,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { useTheme } from "../../theme";
import { useLanguage } from "../../context/LanguageContext";
import { translateAbout } from "../../locales/aboutTranslations";

const AboutPage = () => {
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

  // Translation helper
  const t = (key) => translateAbout(key, language);

  // Theme-based gradient helpers (same as HeroSection)
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

  const getButtonGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800";
      case "lavender":
        return "from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800";
      case "rose":
        return "from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800";
      case "sepia":
        return "from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800";
      case "dark":
        return "from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900";
      default:
        return "from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600";
    }
  };

  const getCardBgGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20";
      case "lavender":
        return "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20";
      case "rose":
        return "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20";
      case "sepia":
        return "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20";
      case "dark":
        return "from-gray-800 to-gray-900";
      default:
        return "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20";
    }
  };

  const getShadowColor = () => {
    switch (themeName) {
      case "forest":
        return "shadow-green-200/50 dark:shadow-green-900/30";
      case "lavender":
        return "shadow-purple-200/50 dark:shadow-purple-900/30";
      case "rose":
        return "shadow-rose-200/50 dark:shadow-rose-900/30";
      case "sepia":
        return "shadow-amber-200/50 dark:shadow-amber-900/30";
      case "dark":
        return "shadow-gray-800/50 dark:shadow-gray-900/50";
      default:
        return "shadow-amber-200/50 dark:shadow-amber-900/30";
    }
  };

  const getIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400";
      case "lavender":
        return "text-purple-600 dark:text-purple-400";
      case "rose":
        return "text-rose-600 dark:text-rose-400";
      case "sepia":
        return "text-amber-600 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-500 dark:text-amber-400";
    }
  };

  const getAccentColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-900 dark:text-green-100";
      case "lavender":
        return "text-purple-900 dark:text-purple-100";
      case "rose":
        return "text-rose-900 dark:text-rose-100";
      case "sepia":
        return "text-amber-900 dark:text-amber-100";
      case "dark":
        return "text-gray-100";
      default:
        return "text-amber-900 dark:text-amber-100";
    }
  };

  const getBorderColor = () => {
    switch (themeName) {
      case "forest":
        return "border-green-200 dark:border-green-800";
      case "lavender":
        return "border-purple-200 dark:border-purple-800";
      case "rose":
        return "border-rose-200 dark:border-rose-800";
      case "sepia":
        return "border-amber-200 dark:border-amber-800";
      case "dark":
        return "border-gray-700";
      default:
        return "border-amber-100 dark:border-amber-800";
    }
  };

  const getInputFocusRing = () => {
    switch (themeName) {
      case "forest":
        return "focus:ring-green-200 dark:focus:ring-green-700";
      case "lavender":
        return "focus:ring-purple-200 dark:focus:ring-purple-700";
      case "rose":
        return "focus:ring-rose-200 dark:focus:ring-rose-700";
      case "sepia":
        return "focus:ring-amber-200 dark:focus:ring-amber-700";
      case "dark":
        return "focus:ring-gray-500";
      default:
        return "focus:ring-amber-200 dark:focus:ring-amber-700";
    }
  };

  const getStatBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-100 dark:bg-green-900/30";
      case "lavender":
        return "bg-purple-100 dark:bg-purple-900/30";
      case "rose":
        return "bg-rose-100 dark:bg-rose-900/30";
      case "sepia":
        return "bg-amber-100 dark:bg-amber-900/30";
      case "dark":
        return "bg-gray-700";
      default:
        return "bg-amber-100 dark:bg-amber-900/30";
    }
  };

  const heroGradient = getHeroGradient();
  const buttonGradient = getButtonGradient();
  const cardBgGradient = getCardBgGradient();
  const shadowColor = getShadowColor();
  const iconColor = getIconColor();
  const accentColor = getAccentColor();
  const borderColor = getBorderColor();
  const inputFocusRing = getInputFocusRing();
  const statBgColor = getStatBgColor();

  // Theme-based text colors
  const textPrimary = themeName === "dark" ? "text-white" : "text-gray-800";
  const textSecondary =
    themeName === "dark" ? "text-gray-300" : "text-gray-600";
  const textTertiary = themeName === "dark" ? "text-gray-400" : "text-gray-500";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Statistics data
  const stats = [
    { label: t("poets"), value: "2,500+" },
    { label: t("poems"), value: "10,000+" },
    { label: t("languages"), value: "10" },
    { label: t("countries"), value: "50+" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Hero Section - Same style as HeroSection */}
      <section
        className={`relative w-full bg-gradient-to-r ${heroGradient} text-white rounded-3xl overflow-hidden shadow-xl ${shadowColor}`}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 w-full">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/30 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <FaFeather className="absolute top-10 right-10 text-6xl text-white/20 rotate-12" />
          <FaFeather className="absolute bottom-10 left-10 text-6xl text-white/20 -rotate-12" />
        </div>

        <div className="relative px-8 py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <FaLeaf className="text-6xl text-white animate-float" />
              <FaStar className="text-yellow-200 absolute -top-2 -right-2 text-xl animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            {t("about")} <span className={accentColor}>Prasang</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            {t("aboutTagline")}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${statBgColor} rounded-xl p-6 text-center border ${borderColor}`}
          >
            <div className={`text-3xl font-bold ${textPrimary} mb-2`}>
              {stat.value}
            </div>
            <div className={`text-sm ${textSecondary}`}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div
          className={`bg-gradient-to-br ${cardBgGradient} rounded-2xl shadow-lg p-8 hover:shadow-xl transition border ${borderColor}`}
        >
          <div
            className={`w-16 h-16 ${statBgColor} rounded-2xl flex items-center justify-center mb-6`}
          >
            <span className="text-3xl">🎯</span>
          </div>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-4`}>
            {t("ourMission")}
          </h2>
          <p className={textSecondary}>{t("missionText")}</p>
        </div>
        <div
          className={`bg-gradient-to-br ${cardBgGradient} rounded-2xl shadow-lg p-8 hover:shadow-xl transition border ${borderColor}`}
        >
          <div
            className={`w-16 h-16 ${statBgColor} rounded-2xl flex items-center justify-center mb-6`}
          >
            <span className="text-3xl">✨</span>
          </div>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-4`}>
            {t("ourVision")}
          </h2>
          <p className={textSecondary}>{t("visionText")}</p>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className={`bg-gradient-to-br ${cardBgGradient} rounded-2xl shadow-lg p-8 border ${borderColor}`}
      >
        <div className="flex justify-between mb-4">
          <FaQuoteLeft className={`${iconColor} text-3xl opacity-30`} />
          <FaQuoteRight className={`${iconColor} text-3xl opacity-30`} />
        </div>
        <p
          className={`text-xl md:text-2xl italic ${textPrimary} text-center max-w-3xl mx-auto font-serif`}
        >
          "{t("aboutQuote")}"
        </p>
        <p className={`text-center mt-4 ${iconColor} font-semibold`}>
          — {t("aboutQuoteAuthor")}
        </p>
      </section>

      {/* Contact Section */}
      <section
        className={`bg-gradient-to-br ${cardBgGradient} rounded-2xl shadow-lg p-8 border ${borderColor}`}
      >
        <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>
          {t("getInTouch")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${textSecondary} mb-4`}>{t("contactText")}</p>
            <div className="space-y-3">
              <p className={`flex items-center gap-3 ${textSecondary}`}>
                <FaEnvelope className={iconColor} /> hello@prasang.com
              </p>
              <p className={`flex items-center gap-3 ${textSecondary}`}>
                <FaTwitter className={iconColor} /> @prasang_poetry
              </p>
              <p className={`flex items-center gap-3 ${textSecondary}`}>
                <FaInstagram className={iconColor} /> @prasang.poetry
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("yourEmail")}
              required
              className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} ${textPrimary}`}
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("yourMessage")}
              required
              className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border ${borderColor} rounded-lg focus:outline-none focus:ring-2 ${inputFocusRing} ${textPrimary}`}
            />

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className={`w-full bg-gradient-to-r ${buttonGradient} text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {formStatus === "sending" ? t("sending") : t("sendMessage")}
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm text-center">
                {t("messageSent")}
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm text-center">
                {t("messageFailed")}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer Note */}
      <div className={`text-center ${textTertiary} text-sm`}>
        <p>{t("copyright")}</p>
        <p className="mt-2 flex items-center justify-center gap-1">
          {t("madeWith")} <FaHeart className="text-rose-500" />{" "}
          {t("forPoetryLovers")}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
