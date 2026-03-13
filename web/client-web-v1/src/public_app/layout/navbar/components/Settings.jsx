// src/public_app/layout/navbar/components/Settings.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLanguage,
  FaGlobe,
  FaBookOpen,
  FaPalette,
  FaFont,
  FaAlignLeft,
  FaCheck,
  FaSave,
  FaUndo,
  FaInfoCircle,
  FaMoon,
  FaSun,
  FaEye,
  FaVolumeUp,
  FaKeyboard,
  FaHistory,
  FaDownload,
  FaShareAlt,
  FaBookmark,
  FaHeart,
  FaStar,
  FaBell,
  FaEnvelope,
  FaLock,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    // Language Settings
    literatureLang: "urdu",
    translationLang: "english",
    secondaryTranslation: "none",
    showOriginal: true,
    showTransliteration: true,

    // Display Settings
    theme: "light",
    fontSize: "medium",
    fontFamily: "serif",
    textAlign: "justify",
    lineHeight: "normal",

    // Reading Preferences
    autoScroll: false,
    autoScrollSpeed: "medium",
    nightMode: false,
    sepiaMode: false,

    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    newsletterSubscribed: true,

    // Privacy Settings
    profileVisibility: "public",
    showReadingHistory: true,
    allowComments: true,

    // Download Settings
    downloadQuality: "standard",
    autoDownload: false,

    // Accessibility
    highContrast: false,
    reduceMotion: false,
    screenReader: false,
  });

  const [activeTab, setActiveTab] = useState("language");
  const [saveMessage, setSaveMessage] = useState("");

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("prasang-settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem("prasang-settings", JSON.stringify(settings));
    setSaveMessage("Settings saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);

    // Apply settings to document
    applySettings();
  };

  const resetSettings = () => {
    const defaultSettings = {
      literatureLang: "urdu",
      translationLang: "english",
      secondaryTranslation: "none",
      showOriginal: true,
      showTransliteration: true,
      theme: "light",
      fontSize: "medium",
      fontFamily: "serif",
      textAlign: "justify",
      lineHeight: "normal",
      autoScroll: false,
      autoScrollSpeed: "medium",
      nightMode: false,
      sepiaMode: false,
      emailNotifications: true,
      pushNotifications: false,
      newsletterSubscribed: true,
      profileVisibility: "public",
      showReadingHistory: true,
      allowComments: true,
      downloadQuality: "standard",
      autoDownload: false,
      highContrast: false,
      reduceMotion: false,
      screenReader: false,
    };
    setSettings(defaultSettings);
    localStorage.setItem("prasang-settings", JSON.stringify(defaultSettings));
    applySettings();
    setSaveMessage("Settings reset to default");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const applySettings = () => {
    // Apply theme
    document.documentElement.setAttribute("data-theme", settings.theme);

    // Apply font size
    const fontSizeMap = {
      small: "14px",
      medium: "16px",
      large: "18px",
      xlarge: "20px",
    };
    document.documentElement.style.fontSize = fontSizeMap[settings.fontSize];

    // Apply font family
    document.documentElement.classList.remove(
      "font-serif",
      "font-sans",
      "font-mono",
    );
    document.documentElement.classList.add(settings.fontFamily);

    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    // Apply reduce motion
    if (settings.reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  };

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: "language", label: "Language", icon: FaLanguage },
    { id: "display", label: "Display", icon: FaEye },
    { id: "reading", label: "Reading", icon: FaBookOpen },
    { id: "notifications", label: "Notifications", icon: FaBell },
    { id: "privacy", label: "Privacy", icon: FaLock },
    { id: "downloads", label: "Downloads", icon: FaDownload },
    { id: "accessibility", label: "Accessibility", icon: FaInfoCircle },
    { id: "account", label: "Account", icon: FaUserCircle },
  ];

  const literatureLanguages = [
    {
      code: "urdu",
      name: "اردو",
      flag: "🇵🇰",
      native: "Urdu",
      speakers: "230M",
    },
    {
      code: "hindi",
      name: "हिन्दी",
      flag: "🇮🇳",
      native: "Hindi",
      speakers: "600M",
    },
    {
      code: "persian",
      name: "فارسی",
      flag: "🇮🇷",
      native: "Persian",
      speakers: "110M",
    },
    {
      code: "english",
      name: "English",
      flag: "🇬🇧",
      native: "English",
      speakers: "1.5B",
    },
    {
      code: "french",
      name: "Français",
      flag: "🇫🇷",
      native: "French",
      speakers: "300M",
    },
    {
      code: "arabic",
      name: "العربية",
      flag: "🇸🇦",
      native: "Arabic",
      speakers: "420M",
    },
    {
      code: "spanish",
      name: "Español",
      flag: "🇪🇸",
      native: "Spanish",
      speakers: "580M",
    },
    {
      code: "german",
      name: "Deutsch",
      flag: "🇩🇪",
      native: "German",
      speakers: "130M",
    },
  ];

  const translationLanguages = [
    { code: "english", name: "English", flag: "🇬🇧" },
    { code: "hindi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "urdu", name: "اردو", flag: "🇵🇰" },
    { code: "persian", name: "فارسی", flag: "🇮🇷" },
    { code: "french", name: "Français", flag: "🇫🇷" },
    { code: "arabic", name: "العربية", flag: "🇸🇦" },
    { code: "spanish", name: "Español", flag: "🇪🇸" },
    { code: "german", name: "Deutsch", flag: "🇩🇪" },
    { code: "chinese", name: "中文", flag: "🇨🇳" },
    { code: "russian", name: "Русский", flag: "🇷🇺" },
    { code: "japanese", name: "日本語", flag: "🇯🇵" },
    { code: "korean", name: "한국어", flag: "🇰🇷" },
  ];

  const themes = [
    {
      id: "light",
      name: "Light",
      icon: "☀️",
      gradient: "from-amber-50 to-white",
      desc: "Bright and clean",
    },
    {
      id: "sepia",
      name: "Sepia",
      icon: "📜",
      gradient: "from-amber-100 to-amber-50",
      desc: "Warm vintage feel",
    },
    {
      id: "forest",
      name: "Forest",
      icon: "🌲",
      gradient: "from-green-50 to-emerald-100",
      desc: "Calm and natural",
    },
    {
      id: "ocean",
      name: "Ocean",
      icon: "🌊",
      gradient: "from-blue-50 to-cyan-100",
      desc: "Cool and serene",
    },
    {
      id: "sunset",
      name: "Sunset",
      icon: "🌅",
      gradient: "from-orange-50 to-rose-100",
      desc: "Warm and romantic",
    },
    {
      id: "lavender",
      name: "Lavender",
      icon: "🌸",
      gradient: "from-purple-50 to-pink-100",
      desc: "Soft and elegant",
    },
    {
      id: "midnight",
      name: "Midnight",
      icon: "🌙",
      gradient: "from-gray-900 to-gray-800",
      desc: "Dark mode",
    },
    {
      id: "coffee",
      name: "Coffee",
      icon: "☕",
      gradient: "from-amber-800 to-amber-700",
      desc: "Rich and warm",
    },
  ];

  const fontSizes = [
    { id: "small", name: "Small", value: "14px", preview: "Aa" },
    { id: "medium", name: "Medium", value: "16px", preview: "Aa" },
    { id: "large", name: "Large", value: "18px", preview: "Aa" },
    { id: "xlarge", name: "Extra Large", value: "20px", preview: "Aa" },
  ];

  const fontFamilies = [
    {
      id: "serif",
      name: "Serif",
      value: "font-serif",
      sample: "Aa",
      desc: "Traditional",
    },
    {
      id: "sans",
      name: "Sans Serif",
      value: "font-sans",
      sample: "Aa",
      desc: "Modern",
    },
    {
      id: "mono",
      name: "Monospace",
      value: "font-mono",
      sample: "Aa",
      desc: "Code style",
    },
    {
      id: "handwriting",
      name: "Handwriting",
      value: "font-handwriting",
      sample: "Aa",
      desc: "Personal",
    },
  ];

  const textAlignments = [
    { id: "left", name: "Left", icon: "⬅️", desc: "Aligned to left" },
    { id: "center", name: "Center", icon: "⬆️", desc: "Centered" },
    { id: "right", name: "Right", icon: "➡️", desc: "Aligned to right" },
    { id: "justify", name: "Justify", icon: "⚖️", desc: "Even spacing" },
  ];

  const lineHeights = [
    { id: "compact", name: "Compact", value: "1.2" },
    { id: "normal", name: "Normal", value: "1.5" },
    { id: "relaxed", name: "Relaxed", value: "1.8" },
    { id: "double", name: "Double", value: "2.0" },
  ];

  const downloadQualities = [
    { id: "standard", name: "Standard", size: "~2MB" },
    { id: "high", name: "High Quality", size: "~5MB" },
    { id: "premium", name: "Premium", size: "~10MB" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-white/20 rounded-full transition"
            >
              <FaArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-amber-100 text-sm">
                Customize your reading experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 space-y-2">
            <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-24">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-amber-50"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
              {/* Save Message */}
              {saveMessage && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  {saveMessage}
                </div>
              )}

              {/* Language Settings */}
              {activeTab === "language" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaLanguage className="text-amber-500" /> Language Settings
                  </h2>

                  {/* Literature Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Primary Literature Language
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {literatureLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() =>
                            updateSetting("literatureLang", lang.code)
                          }
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                            settings.literatureLang === lang.code
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <span className="text-3xl">{lang.flag}</span>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-gray-800">
                              {lang.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {lang.native} · {lang.speakers} speakers
                            </div>
                          </div>
                          {settings.literatureLang === lang.code && (
                            <FaCheck className="text-amber-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Translation Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Primary Translation Language
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {translationLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() =>
                            updateSetting("translationLang", lang.code)
                          }
                          className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                            settings.translationLang === lang.code
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium text-gray-800">
                            {lang.name}
                          </span>
                          {settings.translationLang === lang.code && (
                            <FaCheck className="text-amber-500 ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Translation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Secondary Translation (Optional)
                    </label>
                    <select
                      value={settings.secondaryTranslation}
                      onChange={(e) =>
                        updateSetting("secondaryTranslation", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="none">None</option>
                      {translationLanguages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Language Display Options */}
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Show Original Text
                        </span>
                        <p className="text-sm text-gray-500">
                          Display the original language alongside translation
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.showOriginal}
                        onChange={(e) =>
                          updateSetting("showOriginal", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Show Transliteration
                        </span>
                        <p className="text-sm text-gray-500">
                          Display pronunciation guide
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.showTransliteration}
                        onChange={(e) =>
                          updateSetting("showTransliteration", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Display Settings */}
              {activeTab === "display" && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaEye className="text-amber-500" /> Display Settings
                  </h2>

                  {/* Theme Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Color Theme
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => updateSetting("theme", theme.id)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            settings.theme === theme.id
                              ? "border-amber-500"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div
                            className={`h-12 rounded-lg bg-gradient-to-r ${theme.gradient} mb-2`}
                          />
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">
                              {theme.name}
                            </span>
                            {settings.theme === theme.id && (
                              <FaCheck className="text-amber-500 text-sm" />
                            )}
                          </div>
                          <span className="text-xs text-gray-500">
                            {theme.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Font Size
                    </label>
                    <div className="flex gap-3">
                      {fontSizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => updateSetting("fontSize", size.id)}
                          className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                            settings.fontSize === size.id
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div className={`text-2xl mb-1`}>{size.preview}</div>
                          <div className="font-medium text-gray-800">
                            {size.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {size.value}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Family */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Font Family
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {fontFamilies.map((font) => (
                        <button
                          key={font.id}
                          onClick={() => updateSetting("fontFamily", font.id)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            settings.fontFamily === font.id
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div className={`${font.value} text-3xl mb-1`}>
                            {font.sample}
                          </div>
                          <div className="font-medium text-gray-800">
                            {font.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {font.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text Alignment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Text Alignment
                    </label>
                    <div className="flex gap-3">
                      {textAlignments.map((align) => (
                        <button
                          key={align.id}
                          onClick={() => updateSetting("textAlign", align.id)}
                          className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                            settings.textAlign === align.id
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div className="text-2xl mb-1">{align.icon}</div>
                          <div className="font-medium text-gray-800">
                            {align.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {align.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Line Height */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Line Height
                    </label>
                    <div className="flex gap-3">
                      {lineHeights.map((height) => (
                        <button
                          key={height.id}
                          onClick={() => updateSetting("lineHeight", height.id)}
                          className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                            settings.lineHeight === height.id
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div className="font-medium text-gray-800">
                            {height.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            Line height {height.value}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Reading Settings */}
              {activeTab === "reading" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaBookOpen className="text-amber-500" /> Reading
                    Preferences
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Auto-scroll
                        </span>
                        <p className="text-sm text-gray-500">
                          Automatically scroll through long texts
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.autoScroll}
                        onChange={(e) =>
                          updateSetting("autoScroll", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    {settings.autoScroll && (
                      <div className="pl-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Scroll Speed
                        </label>
                        <select
                          value={settings.autoScrollSpeed}
                          onChange={(e) =>
                            updateSetting("autoScrollSpeed", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="slow">Slow</option>
                          <option value="medium">Medium</option>
                          <option value="fast">Fast</option>
                        </select>
                      </div>
                    )}

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Night Mode
                        </span>
                        <p className="text-sm text-gray-500">
                          Reduce eye strain at night
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.nightMode}
                        onChange={(e) =>
                          updateSetting("nightMode", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Sepia Mode
                        </span>
                        <p className="text-sm text-gray-500">
                          Warm, vintage reading experience
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.sepiaMode}
                        onChange={(e) =>
                          updateSetting("sepiaMode", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaBell className="text-amber-500" /> Notification Settings
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Email Notifications
                        </span>
                        <p className="text-sm text-gray-500">
                          Receive updates via email
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) =>
                          updateSetting("emailNotifications", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Push Notifications
                        </span>
                        <p className="text-sm text-gray-500">
                          Browser notifications
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.pushNotifications}
                        onChange={(e) =>
                          updateSetting("pushNotifications", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Newsletter
                        </span>
                        <p className="text-sm text-gray-500">
                          Weekly poetry newsletter
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.newsletterSubscribed}
                        onChange={(e) =>
                          updateSetting(
                            "newsletterSubscribed",
                            e.target.checked,
                          )
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaLock className="text-amber-500" /> Privacy Settings
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Profile Visibility
                    </label>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) =>
                        updateSetting("profileVisibility", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option value="public">Public - Everyone can see</option>
                      <option value="followers">Followers Only</option>
                      <option value="private">Private - Only me</option>
                    </select>
                  </div>

                  <div className="space-y-4 mt-4">
                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Show Reading History
                        </span>
                        <p className="text-sm text-gray-500">
                          Display your reading activity
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.showReadingHistory}
                        onChange={(e) =>
                          updateSetting("showReadingHistory", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Allow Comments
                        </span>
                        <p className="text-sm text-gray-500">
                          Let others comment on your activity
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.allowComments}
                        onChange={(e) =>
                          updateSetting("allowComments", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Downloads Settings */}
              {activeTab === "downloads" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaDownload className="text-amber-500" /> Download Settings
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Download Quality
                    </label>
                    <div className="flex gap-3">
                      {downloadQualities.map((quality) => (
                        <button
                          key={quality.id}
                          onClick={() =>
                            updateSetting("downloadQuality", quality.id)
                          }
                          className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                            settings.downloadQuality === quality.id
                              ? "border-amber-500 bg-amber-50"
                              : "border-gray-200 hover:border-amber-200"
                          }`}
                        >
                          <div className="font-medium text-gray-800">
                            {quality.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {quality.size}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-medium text-gray-800">
                        Auto-download
                      </span>
                      <p className="text-sm text-gray-500">
                        Automatically download new content
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.autoDownload}
                      onChange={(e) =>
                        updateSetting("autoDownload", e.target.checked)
                      }
                      className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                    />
                  </label>
                </div>
              )}

              {/* Accessibility Settings */}
              {activeTab === "accessibility" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaInfoCircle className="text-amber-500" /> Accessibility
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          High Contrast
                        </span>
                        <p className="text-sm text-gray-500">
                          Increase contrast for better visibility
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) =>
                          updateSetting("highContrast", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Reduce Motion
                        </span>
                        <p className="text-sm text-gray-500">
                          Minimize animations
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.reduceMotion}
                        onChange={(e) =>
                          updateSetting("reduceMotion", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <span className="font-medium text-gray-800">
                          Screen Reader
                        </span>
                        <p className="text-sm text-gray-500">
                          Optimize for screen readers
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) =>
                          updateSetting("screenReader", e.target.checked)
                        }
                        className="w-5 h-5 text-amber-500 rounded focus:ring-amber-400"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Account Settings */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaUserCircle className="text-amber-500" /> Account Settings
                  </h2>

                  <div className="bg-amber-50 rounded-xl p-6 text-center">
                    <FaUserCircle className="text-6xl text-amber-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Guest User
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sign in to sync settings across devices
                    </p>
                    <Link
                      to="/signup"
                      className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-amber-600 hover:to-yellow-600 transition"
                    >
                      Sign In / Sign Up
                    </Link>
                  </div>

                  <div className="border-t border-amber-200 pt-6">
                    <h3 className="font-medium text-gray-800 mb-4">
                      Data Management
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition flex items-center justify-between">
                        <span>Export my data</span>
                        <FaDownload className="text-amber-500" />
                      </button>
                      <button className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition flex items-center justify-between">
                        <span>Clear reading history</span>
                        <FaHistory className="text-amber-500" />
                      </button>
                      <button className="w-full text-left p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition flex items-center justify-between">
                        <span>Delete account</span>
                        <FaTimes className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8 border-t border-amber-200 mt-8">
                <button
                  onClick={saveSettings}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all font-medium flex items-center justify-center gap-2"
                >
                  <FaSave /> Save Changes
                </button>
                <button
                  onClick={resetSettings}
                  className="flex-1 border-2 border-amber-500 text-amber-600 py-3 rounded-xl hover:bg-amber-50 transition-all font-medium flex items-center justify-center gap-2"
                >
                  <FaUndo /> Reset to Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
