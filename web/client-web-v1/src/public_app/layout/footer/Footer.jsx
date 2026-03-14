// src/public_app/layout/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaFeather,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBookOpen,
  FaUserFriends,
  FaInfoCircle,
  FaPenFancy,
  FaGlobe,
  FaRss,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../../../theme";
import { useLanguage } from "../../../context/LanguageContext";
import { translateFooter } from "../../../locales/footerTranslations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();

  // Translation helper
  const t = (text) => translateFooter(text, language);

  const quickLinks = [
    { name: t("home"), path: "/", icon: FaFeather },
    { name: t("poems"), path: "/poems", icon: FaBookOpen },
    { name: t("poets"), path: "/poets", icon: FaUserFriends },
    { name: t("poetryForms"), path: "/poems-types", icon: FaPenFancy },
    { name: t("about"), path: "/about", icon: FaInfoCircle },
  ];

  const resources = [
    { name: t("writingTips"), path: "/blog/writing-tips" },
    { name: t("poetryGlossary"), path: "/resources/glossary" },
    { name: t("famousPoets"), path: "/poets/featured" },
    { name: t("contests"), path: "/contests" },
    { name: t("workshops"), path: "/workshops" },
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/prasang_poetry",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/prasang.poetry",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/prasangpoetry",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@prasangpoetry",
      label: "YouTube",
    },
    {
      icon: FaRss,
      href: "/rss",
      label: "RSS Feed",
    },
  ];

  // Theme-based helper functions
  const getFooterGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-50 to-white";
      case "lavender":
        return "from-purple-50 to-white";
      case "rose":
        return "from-rose-50 to-white";
      case "sepia":
        return "from-amber-100 to-amber-50";
      case "dark":
        return "from-gray-800 to-gray-900";
      default:
        return "from-gray-50 to-white";
    }
  };

  const getSocialHoverColor = (platform) => {
    const colors = {
      twitter: "hover:text-blue-400",
      instagram: "hover:text-pink-500",
      facebook: "hover:text-blue-600",
      youtube: "hover:text-red-500",
      rss: "hover:text-orange-500",
    };
    return colors[platform] || `hover:${theme.text.accent}`;
  };

  const footerGradient = getFooterGradient();

  // Check if current language is RTL (Urdu)
  const isRTL = language === "ur";

  return (
    <footer
      className={`bg-gradient-to-b ${footerGradient} border-t ${theme.border.accent} mt-16`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <FaFeather
                  className={`text-2xl ${theme.icon.primary} group-hover:scale-110 transition-transform`}
                />
                <FaHeart className="absolute -top-1 -right-2 text-xs text-rose-400" />
              </div>
              <span
                className={`text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent ${theme.text.primary}`}
              >
                Prasang
              </span>
            </Link>

            <p className={`${theme.text.secondary} text-sm leading-relaxed`}>
              {t("brandDescription")}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const hoverColor = getSocialHoverColor(
                  social.label.toLowerCase().includes("twitter")
                    ? "twitter"
                    : social.label.toLowerCase().includes("instagram")
                      ? "instagram"
                      : social.label.toLowerCase().includes("facebook")
                        ? "facebook"
                        : social.label.toLowerCase().includes("youtube")
                          ? "youtube"
                          : "rss",
                );
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 dark:text-gray-500 ${hoverColor} transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-sm font-semibold ${theme.text.primary} uppercase tracking-wider mb-4`}
            >
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className={`${theme.text.secondary} ${theme.link.secondary} text-sm flex items-center gap-2 group`}
                  >
                    <link.icon
                      className={`text-xs text-gray-400 dark:text-gray-500 group-hover:${theme.text.accent}`}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className={`text-sm font-semibold ${theme.text.primary} uppercase tracking-wider mb-4`}
            >
              {t("resources")}
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <Link
                    to={resource.path}
                    className={`${theme.text.secondary} ${theme.link.secondary} text-sm`}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-sm font-semibold ${theme.text.primary} uppercase tracking-wider mb-4`}
            >
              {t("getInTouch")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope
                  className={`${theme.icon.primary} mt-1 flex-shrink-0`}
                />
                <a
                  href="mailto:hello@prasang.com"
                  className={`${theme.text.secondary} ${theme.link.secondary} text-sm`}
                >
                  hello@prasang.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone
                  className={`${theme.icon.primary} mt-1 flex-shrink-0`}
                />
                <a
                  href="tel:+1234567890"
                  className={`${theme.text.secondary} ${theme.link.secondary} text-sm`}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className={`${theme.icon.primary} mt-1 flex-shrink-0`}
                />
                <address
                  className={`${theme.text.secondary} text-sm not-italic`}
                >
                  123 Poetry Lane
                  <br />
                  Creative City, PC 12345
                </address>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <h4 className={`text-sm font-medium ${theme.text.primary} mb-2`}>
                {t("subscribe")}
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("yourEmail")}
                  className={`flex-1 px-3 py-2 text-sm ${theme.input.default} rounded-lg focus:outline-none focus:ring-2 ${theme.ring.focus}`}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 ${theme.button.primary} text-sm rounded-lg transition`}
                >
                  {t("subscribeBtn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t ${theme.border.light} ${theme.background.secondary}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className={`text-xs ${theme.text.tertiary} text-center md:text-left`}
            >
              © {currentYear} Prasang. {t("allRightsReserved")} |
              <Link to="/privacy" className={`${theme.link.secondary} ml-1`}>
                {t("privacy")}
              </Link>
              <span className="mx-2">•</span>
              <Link to="/terms" className={theme.link.secondary}>
                {t("terms")}
              </Link>
              <span className="mx-2">•</span>
              <Link to="/sitemap" className={theme.link.secondary}>
                {t("sitemap")}
              </Link>
            </p>

            {/* Made with love */}
            <p
              className={`text-xs ${theme.text.tertiary} flex items-center gap-1`}
            >
              {t("madeWith")} <FaHeart className="text-rose-400 text-xs" />{" "}
              {t("for")} {t("poetryLovers")}
              <span className="mx-1">•</span>
              <FaGlobe className={theme.icon.primary} size={12} /> 3{" "}
              {t("languages")}
            </p>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`text-xs ${theme.link.primary} flex items-center gap-1`}
            >
              {t("backToTop")} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
