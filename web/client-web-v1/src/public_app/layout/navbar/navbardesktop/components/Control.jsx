// src/public_app/layout/navbar/navbardesktop/components/Control.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaLanguage,
  FaRobot,
  FaCheck,
  FaChevronDown,
  FaTimes,
  FaVolumeUp,
  FaBookOpen,
  FaPalette,
  FaMoon,
  FaLeaf,
  FaFeather,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";

const Control = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("language");
  const dropdownRef = useRef(null);

  const { theme, themeName, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  // Literature languages available
  const literatureLanguages = [
    { code: "en", name: "English", flag: "🇬🇧", litCount: 12453 },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳", litCount: 8765 },
    { code: "ur", name: "اردو", flag: "🇵🇰", litCount: 6543 },
    { code: "bn", name: "বাংলা", flag: "🇧🇩", litCount: 4321 },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳", litCount: 3987 },
    { code: "te", name: "తెలుగు", flag: "🇮🇳", litCount: 3123 },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳", litCount: 2876 },
    { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳", litCount: 2543 },
    { code: "mr", name: "मराठी", flag: "🇮🇳", litCount: 2234 },
    { code: "gu", name: "ગુજરાતી", flag: "🇮🇳", litCount: 1987 },
    { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳", litCount: 1765 },
    { code: "fa", name: "فارسی", flag: "🇮🇷", litCount: 1543 },
    { code: "ar", name: "العربية", flag: "🇸🇦", litCount: 1432 },
    { code: "es", name: "Español", flag: "🇪🇸", litCount: 1321 },
    { code: "fr", name: "Français", flag: "🇫🇷", litCount: 1234 },
    { code: "de", name: "Deutsch", flag: "🇩🇪", litCount: 1123 },
    { code: "ru", name: "Русский", flag: "🇷🇺", litCount: 1098 },
    { code: "zh", name: "中文", flag: "🇨🇳", litCount: 987 },
    { code: "ja", name: "日本語", flag: "🇯🇵", litCount: 876 },
    { code: "ko", name: "한국어", flag: "🇰🇷", litCount: 765 },
  ];

  // AI Translation options (3 languages at a time)
  const [aiLanguages, setAiLanguages] = useState([
    { code: "en", name: "English", enabled: true },
    { code: "hi", name: "हिन्दी", enabled: true },
    { code: "ur", name: "اردو", enabled: true },
    { code: "bn", name: "বাংলা", enabled: false },
    { code: "ta", name: "தமிழ்", enabled: false },
    { code: "te", name: "తెలుగు", enabled: false },
    { code: "ml", name: "മലയാളം", enabled: false },
    { code: "kn", name: "ಕನ್ನಡ", enabled: false },
    { code: "mr", name: "मराठी", enabled: false },
    { code: "gu", name: "ગુજરાતી", enabled: false },
    { code: "pa", name: "ਪੰਜਾਬੀ", enabled: false },
    { code: "fa", name: "فارسی", enabled: false },
    { code: "ar", name: "العربية", enabled: false },
    { code: "es", name: "Español", enabled: false },
    { code: "fr", name: "Français", enabled: false },
    { code: "de", name: "Deutsch", enabled: false },
    { code: "ru", name: "Русский", enabled: false },
    { code: "zh", name: "中文", enabled: false },
    { code: "ja", name: "日本語", enabled: false },
    { code: "ko", name: "한국어", enabled: false },
  ]);

  // State for various options
  const [romanzation, setRomanzation] = useState(false);
  const [aiTranslation, setAiTranslation] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(themeName === "dark");
  const [selectedTheme, setSelectedTheme] = useState(themeName);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle AI language toggle (max 3)
  const toggleAiLanguage = (code) => {
    const enabledCount = aiLanguages.filter((l) => l.enabled).length;
    const targetLang = aiLanguages.find((l) => l.code === code);

    if (targetLang.enabled) {
      // Disable the language
      setAiLanguages((prev) =>
        prev.map((l) => (l.code === code ? { ...l, enabled: false } : l)),
      );
    } else {
      // Enable only if less than 3 are enabled
      if (enabledCount < 3) {
        setAiLanguages((prev) =>
          prev.map((l) => (l.code === code ? { ...l, enabled: true } : l)),
        );
      }
    }
  };

  // Theme options
  const themes = [
    { id: "default", name: "Default Amber", icon: <FaStar />, color: "amber" },
    { id: "forest", name: "Forest Green", icon: <FaLeaf />, color: "green" },
    {
      id: "lavender",
      name: "Lavender Purple",
      icon: <FaFeather />,
      color: "purple",
    },
    { id: "rose", name: "Rose Pink", icon: <FaStar />, color: "rose" },
    {
      id: "sepia",
      name: "Sepia Vintage",
      icon: <FaBookOpen />,
      color: "amber",
    },
    { id: "dark", name: "Dark Mode", icon: <FaMoon />, color: "gray" },
  ];

  // Theme-based styling
  const getDropdownBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/90";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/90";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/90";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/90";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getButtonBg = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-100 dark:hover:bg-green-800";
      case "lavender":
        return "hover:bg-purple-100 dark:hover:bg-purple-800";
      case "rose":
        return "hover:bg-rose-100 dark:hover:bg-rose-800";
      case "sepia":
        return "hover:bg-amber-100 dark:hover:bg-amber-800";
      case "dark":
        return "hover:bg-gray-700";
      default:
        return "hover:bg-gray-100 dark:hover:bg-gray-700";
    }
  };

  const getTabActiveColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600 dark:text-green-400 border-green-600";
      case "lavender":
        return "text-purple-600 dark:text-purple-400 border-purple-600";
      case "rose":
        return "text-rose-600 dark:text-rose-400 border-rose-600";
      case "sepia":
        return "text-amber-600 dark:text-amber-400 border-amber-600";
      case "dark":
        return "text-gray-300 border-gray-300";
      default:
        return "text-amber-600 dark:text-amber-400 border-amber-600";
    }
  };

  const getCheckboxColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-600";
      case "lavender":
        return "text-purple-600";
      case "rose":
        return "text-rose-600";
      case "sepia":
        return "text-amber-600";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-600";
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
        return "text-amber-600 dark:text-amber-400";
    }
  };

  const dropdownBg = getDropdownBg();
  const buttonBg = getButtonBg();
  const tabActiveColor = getTabActiveColor();
  const checkboxColor = getCheckboxColor();
  const iconColor = getIconColor();

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Control Button with AiFillControl icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-all duration-200 ${buttonBg} flex items-center gap-1`}
        aria-label="Controls"
      >
        <AiFillControl
          className={`text-lg ${iconColor} ${isOpen ? "rotate-90" : ""} transition-transform duration-300`}
        />
        <FaChevronDown
          className={`text-xs ${iconColor} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-96 ${dropdownBg} rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3
              className={`font-semibold flex items-center gap-2 ${iconColor}`}
            >
              <AiFillControl /> Controls & Preferences
            </h3>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {[
              { id: "language", label: "Literature", icon: <FaGlobe /> },
              { id: "ai", label: "AI Translation", icon: <FaRobot /> },
              { id: "theme", label: "Theme", icon: <FaPalette /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? `${tabActiveColor} border-b-2`
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Literature Language Tab */}
            {activeTab === "language" && (
              <div className="space-y-4">
                {/* Romanzation Toggle */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaLanguage className={iconColor} />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Romanzation
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Convert script to Latin
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setRomanzation(!romanzation)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      romanzation
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        romanzation ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Literature Language Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Literature Language
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {literatureLanguages.slice(0, 10).map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left transition ${
                          language === lang.code
                            ? `${buttonBg} ${iconColor} font-medium`
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="flex-1 text-sm truncate">
                          {lang.name}
                        </span>
                        {language === lang.code && (
                          <FaCheck className={checkboxColor} size={12} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* AI Translation Tab */}
            {activeTab === "ai" && (
              <div className="space-y-4">
                {/* AI Translation Toggle */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaRobot className={iconColor} />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        AI Translation
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Enable real-time translation
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setAiTranslation(!aiTranslation)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      aiTranslation
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        aiTranslation ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Audio Toggle */}
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaVolumeUp className={iconColor} />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Audio Playback
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Read poems aloud
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      audioEnabled
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        audioEnabled ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* AI Language Selection (Max 3) */}
                {aiTranslation && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Select up to 3 languages
                      </label>
                      <span className="text-xs text-gray-500">
                        {aiLanguages.filter((l) => l.enabled).length}/3 selected
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                      {aiLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => toggleAiLanguage(lang.code)}
                          disabled={
                            !lang.enabled &&
                            aiLanguages.filter((l) => l.enabled).length >= 3
                          }
                          className={`flex items-center gap-2 p-2 rounded-lg text-left transition ${
                            lang.enabled
                              ? `${buttonBg} ${iconColor} font-medium`
                              : aiLanguages.filter((l) => l.enabled).length >= 3
                                ? "opacity-40 cursor-not-allowed text-gray-400"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          <span className="flex-1 text-sm truncate">
                            {lang.name}
                          </span>
                          {lang.enabled && (
                            <FaCheck className={checkboxColor} size={12} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Theme Tab */}
            {activeTab === "theme" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setTheme(th.id)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        themeName === th.id
                          ? `border-${th.color}-500 bg-${th.color}-50 dark:bg-${th.color}-900/20`
                          : "border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className={`text-2xl mb-2 text-${th.color}-500`}>
                        {th.icon}
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          themeName === th.id
                            ? `text-${th.color}-600`
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {th.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with link to full preferences page */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Quick settings
              </span>
              <Link
                to="/controls-preferences"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 ${buttonBg} rounded-lg text-sm ${iconColor} transition-all group`}
              >
                <span>Full Preferences</span>
                <FaExternalLinkAlt
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Preferences saved locally</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Control;
