import { useState } from "react";
import { FaPalette } from "react-icons/fa";

const themes = [
  { name: "Light", icon: "☀️", gradient: "from-amber-50 to-white" },
  { name: "Dark", icon: "🌙", gradient: "from-gray-900 to-gray-800" },
  { name: "Forest", icon: "🌲", gradient: "from-green-50 to-emerald-100" },
  { name: "Ocean", icon: "🌊", gradient: "from-blue-50 to-cyan-100" },
  { name: "Sunset", icon: "🌅", gradient: "from-orange-50 to-rose-100" },
  { name: "Lavender", icon: "🌸", gradient: "from-purple-50 to-pink-100" },
];

const ThemeSwitcher = ({ mobile = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (theme) => {
    console.log("Theme selected:", theme.name);
    if (onSelect) onSelect(theme);
    setIsOpen(false);
  };

  /* ---------------- MOBILE VERSION ---------------- */

  if (mobile) {
    return (
      <div className="border-t border-amber-200 dark:border-amber-800 pt-4 mt-4 px-3">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-amber-600 dark:text-amber-400">
          <FaPalette />
          Theme
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleSelect(theme)}
              className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-white dark:bg-gray-800 border border-amber-100 dark:border-amber-800 shadow-sm active:scale-95 transition"
            >
              <span className="text-xl">{theme.icon}</span>

              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {theme.name}
              </span>

              <span
                className={`w-6 h-2 rounded-full bg-gradient-to-r ${theme.gradient}`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- DESKTOP VERSION ---------------- */

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full transition-all"
      >
        <FaPalette size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-amber-200 dark:border-amber-800 py-2 z-50">
          <div className="px-4 py-2 text-sm text-amber-600 dark:text-amber-400 border-b border-amber-200 dark:border-amber-800 font-medium">
            Choose Theme
          </div>

          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleSelect(theme)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 flex items-center gap-3 transition-colors"
            >
              <span className="text-lg">{theme.icon}</span>

              <span>{theme.name}</span>

              <span
                className={`ml-auto w-4 h-4 rounded-full bg-gradient-to-r ${theme.gradient}`}
              ></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
