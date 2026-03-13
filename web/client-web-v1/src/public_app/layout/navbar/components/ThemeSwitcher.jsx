// src/public_app/layout/navbar/components/ThemeSwitcher.jsx
import { useState } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";
import { useTheme } from "../../../../theme";

const themeConfig = {
  light: {
    name: "Light",
    icon: "☀️",
    gradient: "from-amber-400 to-yellow-400",
    bg: "bg-amber-50",
    hoverBg: "hover:bg-amber-100",
    border: "border-amber-200",
    accent: "text-amber-600",
  },
  dark: {
    name: "Dark",
    icon: "🌙",
    gradient: "from-gray-700 to-gray-900",
    bg: "bg-gray-800",
    hoverBg: "hover:bg-gray-700",
    border: "border-gray-700",
    accent: "text-amber-400",
  },
  forest: {
    name: "Forest",
    icon: "🌲",
    gradient: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    hoverBg: "hover:bg-green-100",
    border: "border-green-200",
    accent: "text-green-600",
  },
  lavender: {
    name: "Lavender",
    icon: "🌸",
    gradient: "from-purple-400 to-pink-400",
    bg: "bg-purple-50",
    hoverBg: "hover:bg-purple-100",
    border: "border-purple-200",
    accent: "text-purple-600",
  },
  rose: {
    name: "Rose",
    icon: "🌹",
    gradient: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    hoverBg: "hover:bg-rose-100",
    border: "border-rose-200",
    accent: "text-rose-600",
  },
  sepia: {
    name: "Sepia",
    icon: "📜",
    gradient: "from-amber-600 to-yellow-700",
    bg: "bg-amber-100",
    hoverBg: "hover:bg-amber-200",
    border: "border-amber-300",
    accent: "text-amber-700",
  },
};

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeName, setTheme, theme } = useTheme();
  const currentTheme = themeConfig[themeName];

  return (
    <div className="relative">
      {/* Theme toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 ${theme.text.accent} ${theme.background.cardHover} rounded-full transition-all group`}
        aria-label="Switch theme"
      >
        <FaPalette
          size={18}
          className="group-hover:rotate-12 transition-transform"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-72 ${theme.background.card} rounded-2xl shadow-xl border ${theme.border.accent} p-4 z-50`}
        >
          {/* Header */}
          <h3
            className={`text-sm font-semibold ${theme.text.primary} mb-3 flex items-center gap-2`}
          >
            <FaPalette className={theme.icon.primary} />
            Select Theme
          </h3>

          {/* Theme grid */}
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(themeConfig).map(([key, themeOption]) => {
              const isActive = themeName === key;

              return (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    isActive
                      ? `border-${themeOption.accent.replace("text-", "")} bg-${themeOption.bg.replace("bg-", "")}`
                      : `${theme.border.default} ${theme.background.cardHover}`
                  }`}
                >
                  {/* Theme preview */}
                  <div
                    className={`w-full h-12 rounded-lg bg-gradient-to-r ${themeOption.gradient} mb-2 flex items-center justify-center text-white text-xl shadow-md`}
                  >
                    {themeOption.icon}
                  </div>

                  {/* Theme name and check */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium ${theme.text.primary}`}
                    >
                      {themeOption.name}
                    </span>
                    {isActive && (
                      <FaCheck className={theme.icon.primary} size={12} />
                    )}
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${theme.icon.primary.replace("text", "bg")} mx-auto mt-1`}
                    ></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Current theme indicator */}
          <div
            className={`mt-3 pt-2 text-center text-xs ${theme.text.tertiary} border-t ${theme.border.light}`}
          >
            <span className="flex items-center justify-center gap-1">
              <span>Current:</span>
              <span
                className={`font-medium ${theme.text.accent} flex items-center gap-1`}
              >
                <span>{currentTheme.icon}</span>
                {currentTheme.name}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
