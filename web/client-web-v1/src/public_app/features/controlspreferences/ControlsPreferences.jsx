// src/public_app/features/controlspreferences/ControlsPreferences.jsx
import { useState } from "react";
import {
  FaGlobe,
  FaLanguage,
  FaRobot,
  FaVolumeUp,
  FaPalette,
  FaMoon,
  FaSun,
  FaLeaf,
  FaFeather,
  FaStar,
  FaBookOpen,
  FaCheck,
  FaTimes,
  FaSave,
  FaUndo,
  FaInfoCircle,
  FaMicrophone,
  FaHeadphones,
  FaBell,
  FaEye,
} from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { useTheme } from "../../../theme";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";

const ControlsPreferences = () => {
  const { themeName, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState("literature");
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  // State for various preferences
  const [preferences, setPreferences] = useState({
    // Literature preferences
    literatureLanguage: language,
    romanzation: false,

    // AI Translation preferences
    aiTranslation: true,
    audioEnabled: false,
    aiLanguages: [
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
    ],

    // Theme preferences
    selectedTheme: themeName,

    // Notification preferences
    notifications: {
      email: true,
      push: true,
      poemUpdates: true,
      contestAlerts: true,
      newFollowers: false,
    },

    // Display preferences
    fontSize: "medium",
    lineHeight: "normal",
    fontFamily: "default",
  });

  // Literature languages available
  const literatureLanguages = [
    {
      code: "en",
      name: "English",
      flag: "🇬🇧",
      litCount: 12453,
      native: "English",
    },
    { code: "hi", name: "Hindi", flag: "🇮🇳", litCount: 8765, native: "हिन्दी" },
    { code: "ur", name: "Urdu", flag: "🇵🇰", litCount: 6543, native: "اردو" },
    {
      code: "bn",
      name: "Bengali",
      flag: "🇧🇩",
      litCount: 4321,
      native: "বাংলা",
    },
    { code: "ta", name: "Tamil", flag: "🇮🇳", litCount: 3987, native: "தமிழ்" },
    {
      code: "te",
      name: "Telugu",
      flag: "🇮🇳",
      litCount: 3123,
      native: "తెలుగు",
    },
    {
      code: "ml",
      name: "Malayalam",
      flag: "🇮🇳",
      litCount: 2876,
      native: "മലയാളം",
    },
    {
      code: "kn",
      name: "Kannada",
      flag: "🇮🇳",
      litCount: 2543,
      native: "ಕನ್ನಡ",
    },
    {
      code: "mr",
      name: "Marathi",
      flag: "🇮🇳",
      litCount: 2234,
      native: "मराठी",
    },
    {
      code: "gu",
      name: "Gujarati",
      flag: "🇮🇳",
      litCount: 1987,
      native: "ગુજરાતી",
    },
    {
      code: "pa",
      name: "Punjabi",
      flag: "🇮🇳",
      litCount: 1765,
      native: "ਪੰਜਾਬੀ",
    },
    {
      code: "fa",
      name: "Persian",
      flag: "🇮🇷",
      litCount: 1543,
      native: "فارسی",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "🇸🇦",
      litCount: 1432,
      native: "العربية",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "🇪🇸",
      litCount: 1321,
      native: "Español",
    },
    {
      code: "fr",
      name: "French",
      flag: "🇫🇷",
      litCount: 1234,
      native: "Français",
    },
  ];

  // Theme options
  const themes = [
    {
      id: "default",
      name: "Default Amber",
      icon: <FaStar />,
      color: "amber",
      description: "Warm amber tones for a cozy feel",
    },
    {
      id: "forest",
      name: "Forest Green",
      icon: <FaLeaf />,
      color: "green",
      description: "Calming green inspired by nature",
    },
    {
      id: "lavender",
      name: "Lavender Purple",
      icon: <FaFeather />,
      color: "purple",
      description: "Soft purple for creative minds",
    },
    {
      id: "rose",
      name: "Rose Pink",
      icon: <FaStar />,
      color: "rose",
      description: "Gentle pink with romantic vibes",
    },
    {
      id: "sepia",
      name: "Sepia Vintage",
      icon: <FaBookOpen />,
      color: "amber",
      description: "Classic vintage paper look",
    },
    {
      id: "dark",
      name: "Dark Mode",
      icon: <FaMoon />,
      color: "gray",
      description: "Easy on the eyes at night",
    },
  ];

  // Font size options
  const fontSizes = [
    { id: "small", name: "Small", value: "text-sm" },
    { id: "medium", name: "Medium", value: "text-base" },
    { id: "large", name: "Large", value: "text-lg" },
    { id: "xlarge", name: "Extra Large", value: "text-xl" },
  ];

  // Font family options
  const fontFamilies = [
    { id: "default", name: "Default", value: "font-sans" },
    { id: "serif", name: "Serif", value: "font-serif" },
    { id: "mono", name: "Monospace", value: "font-mono" },
  ];

  // Handle AI language toggle (max 3)
  const toggleAiLanguage = (code) => {
    const enabledCount = preferences.aiLanguages.filter(
      (l) => l.enabled,
    ).length;
    const targetLang = preferences.aiLanguages.find((l) => l.code === code);

    if (targetLang.enabled) {
      setPreferences((prev) => ({
        ...prev,
        aiLanguages: prev.aiLanguages.map((l) =>
          l.code === code ? { ...l, enabled: false } : l,
        ),
      }));
    } else {
      if (enabledCount < 3) {
        setPreferences((prev) => ({
          ...prev,
          aiLanguages: prev.aiLanguages.map((l) =>
            l.code === code ? { ...l, enabled: true } : l,
          ),
        }));
      }
    }
  };

  // Handle notification toggle
  const toggleNotification = (key) => {
    setPreferences((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  // Handle save preferences
  const savePreferences = () => {
    // Apply the changes
    setLanguage(preferences.literatureLanguage);
    setTheme(preferences.selectedTheme);

    // Show success notification
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);

    // Here you would also save to localStorage/backend
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setPreferences({
      literatureLanguage: "en",
      romanzation: false,
      aiTranslation: true,
      audioEnabled: false,
      aiLanguages: preferences.aiLanguages.map((l) =>
        l.code === "en" || l.code === "hi" || l.code === "ur"
          ? { ...l, enabled: true }
          : { ...l, enabled: false },
      ),
      selectedTheme: "default",
      notifications: {
        email: true,
        push: true,
        poemUpdates: true,
        contestAlerts: true,
        newFollowers: false,
      },
      fontSize: "medium",
      lineHeight: "normal",
      fontFamily: "default",
    });
  };

  // Theme-based styling
  const getBgColor = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-50 dark:bg-green-900/20";
      case "lavender":
        return "bg-purple-50 dark:bg-purple-900/20";
      case "rose":
        return "bg-rose-50 dark:bg-rose-900/20";
      case "sepia":
        return "bg-amber-50 dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-900";
      default:
        return "bg-gray-50 dark:bg-gray-900";
    }
  };

  const getCardBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-white dark:bg-green-900/20";
      case "lavender":
        return "bg-white dark:bg-purple-900/20";
      case "rose":
        return "bg-white dark:bg-rose-900/20";
      case "sepia":
        return "bg-white dark:bg-amber-900/20";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getTextPrimary = () => {
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
        return "text-white";
      default:
        return "text-gray-900 dark:text-white";
    }
  };

  const getTextSecondary = () => {
    switch (themeName) {
      case "forest":
        return "text-green-700 dark:text-green-300";
      case "lavender":
        return "text-purple-700 dark:text-purple-300";
      case "rose":
        return "text-rose-700 dark:text-rose-300";
      case "sepia":
        return "text-amber-700 dark:text-amber-300";
      case "dark":
        return "text-gray-300";
      default:
        return "text-gray-600 dark:text-gray-300";
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
        return "border-gray-200 dark:border-gray-700";
    }
  };

  const getIconColor = () => {
    switch (themeName) {
      case "forest":
        return "text-green-500 dark:text-green-400";
      case "lavender":
        return "text-purple-500 dark:text-purple-400";
      case "rose":
        return "text-rose-500 dark:text-rose-400";
      case "sepia":
        return "text-amber-500 dark:text-amber-400";
      case "dark":
        return "text-gray-400";
      default:
        return "text-amber-500 dark:text-amber-400";
    }
  };

  const getButtonBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-600 hover:bg-green-700";
      case "lavender":
        return "bg-purple-600 hover:bg-purple-700";
      case "rose":
        return "bg-rose-600 hover:bg-rose-700";
      case "sepia":
        return "bg-amber-600 hover:bg-amber-700";
      case "dark":
        return "bg-gray-700 hover:bg-gray-600";
      default:
        return "bg-amber-600 hover:bg-amber-700";
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

  const bgColor = getBgColor();
  const cardBg = getCardBg();
  const textPrimary = getTextPrimary();
  const textSecondary = getTextSecondary();
  const borderColor = getBorderColor();
  const iconColor = getIconColor();
  const buttonBg = getButtonBg();
  const tabActiveColor = getTabActiveColor();

  return (
    <div className={`min-h-screen ${bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <AiFillControl className={`text-3xl ${iconColor}`} />
            <h1 className={`text-3xl md:text-4xl font-bold ${textPrimary}`}>
              Controls & Preferences
            </h1>
          </div>
          <p className={textSecondary}>
            Customize your Prasang experience to match your reading and learning
            preferences
          </p>
        </div>

        {/* Save Notification */}
        {showSaveNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
            <FaCheck /> Preferences saved successfully!
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div
              className={`${cardBg} rounded-2xl shadow-lg p-4 border ${borderColor} sticky top-24`}
            >
              <nav className="space-y-1">
                {[
                  { id: "literature", label: "Literature", icon: FaGlobe },
                  { id: "ai", label: "AI Translation", icon: FaRobot },
                  { id: "theme", label: "Theme", icon: FaPalette },
                  { id: "notifications", label: "Notifications", icon: FaBell },
                  { id: "display", label: "Display", icon: FaEye },
                  { id: "audio", label: "Audio", icon: FaHeadphones },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? `${tabActiveColor} bg-opacity-10 ${cardBg}`
                        : `text-gray-600 dark:text-gray-400 hover:${cardBg}`
                    }`}
                  >
                    <tab.icon
                      className={activeTab === tab.id ? iconColor : ""}
                    />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Literature Preferences */}
            {activeTab === "literature" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaGlobe className={iconColor} /> Literature Preferences
                </h2>

                {/* Literature Language */}
                <div className="mb-8">
                  <label
                    className={`block text-sm font-medium ${textSecondary} mb-3`}
                  >
                    Primary Literature Language
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {literatureLanguages.slice(0, 12).map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            literatureLanguage: lang.code,
                          }))
                        }
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                          preferences.literatureLanguage === lang.code
                            ? `border-${themeName === "forest" ? "green" : themeName === "lavender" ? "purple" : "amber"}-500 bg-opacity-10`
                            : `border-transparent hover:border-gray-200 dark:hover:border-gray-700`
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <div className="flex-1 text-left">
                          <p className={`font-medium ${textPrimary}`}>
                            {lang.name}
                          </p>
                          <p className={`text-xs ${textSecondary}`}>
                            {lang.native}
                          </p>
                        </div>
                        {preferences.literatureLanguage === lang.code && (
                          <FaCheck className={iconColor} size={14} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Romanzation Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaLanguage className={iconColor} />
                    <div>
                      <p className={`font-medium ${textPrimary}`}>
                        Romanzation
                      </p>
                      <p className={`text-xs ${textSecondary}`}>
                        Convert non-Latin scripts to Latin characters
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        romanzation: !prev.romanzation,
                      }))
                    }
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.romanzation
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.romanzation ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* AI Translation Preferences */}
            {activeTab === "ai" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaRobot className={iconColor} /> AI Translation
                </h2>

                {/* AI Translation Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl mb-6">
                  <div className="flex items-center gap-3">
                    <FaRobot className={iconColor} />
                    <div>
                      <p className={`font-medium ${textPrimary}`}>
                        Enable AI Translation
                      </p>
                      <p className={`text-xs ${textSecondary}`}>
                        Real-time translation of poetry and prose
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        aiTranslation: !prev.aiTranslation,
                      }))
                    }
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.aiTranslation
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.aiTranslation ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* AI Languages Selection */}
                {preferences.aiTranslation && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className={`text-sm font-medium ${textSecondary}`}>
                        Select up to 3 languages for translation
                      </label>
                      <span
                        className={`text-xs ${textSecondary} bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded`}
                      >
                        {
                          preferences.aiLanguages.filter((l) => l.enabled)
                            .length
                        }
                        /3 selected
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-1">
                      {preferences.aiLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => toggleAiLanguage(lang.code)}
                          disabled={
                            !lang.enabled &&
                            preferences.aiLanguages.filter((l) => l.enabled)
                              .length >= 3
                          }
                          className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
                            lang.enabled
                              ? `border-${themeName === "forest" ? "green" : themeName === "lavender" ? "purple" : "amber"}-500 bg-opacity-10`
                              : preferences.aiLanguages.filter((l) => l.enabled)
                                    .length >= 3
                                ? "border-gray-200 dark:border-gray-700 opacity-40 cursor-not-allowed"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                        >
                          <span className="flex-1 text-left text-sm font-medium">
                            {lang.name}
                          </span>
                          {lang.enabled && (
                            <FaCheck className={iconColor} size={12} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Theme Preferences */}
            {activeTab === "theme" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaPalette className={iconColor} /> Theme Selection
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => {
                        setPreferences((prev) => ({
                          ...prev,
                          selectedTheme: th.id,
                        }));
                        setTheme(th.id);
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        preferences.selectedTheme === th.id
                          ? `border-${th.color}-500 bg-${th.color}-50 dark:bg-${th.color}-900/20`
                          : "border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className={`text-3xl mb-2 text-${th.color}-500`}>
                        {th.icon}
                      </div>
                      <p className={`font-medium ${textPrimary} text-sm`}>
                        {th.name}
                      </p>
                      <p className={`text-xs ${textSecondary} mt-1`}>
                        {th.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Notification Preferences */}
            {activeTab === "notifications" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaBell className={iconColor} /> Notification Settings
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      key: "email",
                      label: "Email Notifications",
                      description: "Receive updates via email",
                    },
                    {
                      key: "push",
                      label: "Push Notifications",
                      description: "Browser push notifications",
                    },
                    {
                      key: "poemUpdates",
                      label: "Poem Updates",
                      description: "New poems from favorite poets",
                    },
                    {
                      key: "contestAlerts",
                      label: "Contest Alerts",
                      description: "Upcoming poetry contests",
                    },
                    {
                      key: "newFollowers",
                      label: "New Followers",
                      description: "When someone follows you",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    >
                      <div>
                        <p className={`font-medium ${textPrimary}`}>
                          {item.label}
                        </p>
                        <p className={`text-xs ${textSecondary}`}>
                          {item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleNotification(item.key)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          preferences.notifications[item.key]
                            ? "bg-amber-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.notifications[item.key]
                              ? "translate-x-6"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Display Preferences */}
            {activeTab === "display" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaEye className={iconColor} /> Display Settings
                </h2>

                {/* Font Size */}
                <div className="mb-6">
                  <label
                    className={`block text-sm font-medium ${textSecondary} mb-3`}
                  >
                    Font Size
                  </label>
                  <div className="flex gap-3">
                    {fontSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            fontSize: size.id,
                          }))
                        }
                        className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                          preferences.fontSize === size.id
                            ? `border-${themeName === "forest" ? "green" : "amber"}-500 bg-opacity-10`
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <span className={`${size.value} font-medium`}>
                          {size.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Family */}
                <div className="mb-6">
                  <label
                    className={`block text-sm font-medium ${textSecondary} mb-3`}
                  >
                    Font Family
                  </label>
                  <div className="flex gap-3">
                    {fontFamilies.map((font) => (
                      <button
                        key={font.id}
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            fontFamily: font.id,
                          }))
                        }
                        className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                          preferences.fontFamily === font.id
                            ? `border-${themeName === "forest" ? "green" : "amber"}-500 bg-opacity-10`
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <span className={`${font.value} font-medium`}>
                          {font.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Height */}
                <div>
                  <label
                    className={`block text-sm font-medium ${textSecondary} mb-3`}
                  >
                    Line Height
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="2"
                    step="0.1"
                    value={preferences.lineHeight === "normal" ? 1.5 : 1.5}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        lineHeight: e.target.value,
                      }))
                    }
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Compact</span>
                    <span>Normal</span>
                    <span>Relaxed</span>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Preferences */}
            {activeTab === "audio" && (
              <div
                className={`${cardBg} rounded-2xl shadow-lg p-6 border ${borderColor}`}
              >
                <h2
                  className={`text-xl font-bold ${textPrimary} mb-6 flex items-center gap-2`}
                >
                  <FaHeadphones className={iconColor} /> Audio Settings
                </h2>

                {/* Audio Playback */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl mb-6">
                  <div className="flex items-center gap-3">
                    <FaVolumeUp className={iconColor} />
                    <div>
                      <p className={`font-medium ${textPrimary}`}>
                        Audio Playback
                      </p>
                      <p className={`text-xs ${textSecondary}`}>
                        Read poems aloud with text-to-speech
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        audioEnabled: !prev.audioEnabled,
                      }))
                    }
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.audioEnabled
                        ? "bg-amber-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.audioEnabled ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Voice Selection (if audio enabled) */}
                {preferences.audioEnabled && (
                  <div className="space-y-4">
                    <div>
                      <label
                        className={`block text-sm font-medium ${textSecondary} mb-2`}
                      >
                        Voice Selection
                      </label>
                      <select
                        className={`w-full p-3 rounded-xl border ${borderColor} bg-transparent ${textPrimary}`}
                      >
                        <option>Female (Default)</option>
                        <option>Male</option>
                        <option>Children's</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-medium ${textSecondary} mb-2`}
                      >
                        Reading Speed
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        defaultValue="1"
                        className="w-full accent-amber-500"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Slow</span>
                        <span>Normal</span>
                        <span>Fast</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={resetToDefaults}
                className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
              >
                <FaUndo /> Reset to Defaults
              </button>
              <button
                onClick={savePreferences}
                className={`px-6 py-3 rounded-xl text-white ${buttonBg} transition flex items-center gap-2 shadow-lg`}
              >
                <FaSave /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsPreferences;
