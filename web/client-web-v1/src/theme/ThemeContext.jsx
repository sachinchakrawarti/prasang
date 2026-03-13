// src/theme/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import ForestTheme from "./ForestTheme";
import LavenderTheme from "./LavenderTheme";
import RoseTheme from "./RoseTheme";
import SepiaTheme from "./SepiaTheme";

// Create Theme Context
const ThemeContext = createContext();

// Available themes
const themes = {
  light: LightTheme,
  dark: DarkTheme,
  forest: ForestTheme,
  lavender: LavenderTheme,
  rose: RoseTheme,
  sepia: SepiaTheme,
};

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or default to 'light'
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme && themes[savedTheme] ? savedTheme : "light";
  });

  // Current theme object
  const theme = themes[themeName];

  // Set specific theme
  const setTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
    }
  };

  // Toggle between light and dark (for backward compatibility)
  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Cycle through all themes
  const cycleTheme = () => {
    const themeList = Object.keys(themes);
    const currentIndex = themeList.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeList.length;
    setThemeName(themeList[nextIndex]);
  };

  // Save theme to localStorage and apply to document
  useEffect(() => {
    localStorage.setItem("theme", themeName);

    // Apply theme class to html element for global CSS
    document.documentElement.setAttribute("data-theme", themeName);

    // Remove all theme classes and add current one
    document.documentElement.classList.remove(...Object.keys(themes));
    document.documentElement.classList.add(themeName);
  }, [themeName]);

  // Context value
  const value = {
    theme,
    themeName,
    setTheme,
    toggleTheme,
    cycleTheme,
    isDark: themeName === "dark",
    isLight: themeName === "light",
    themes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook for using theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
