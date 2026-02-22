import { createContext, useState } from "react";

import { PublicLight } from "./publictheme/PublicLight";
import { PublicDark } from "./publictheme/PublicDark";

import { DashboardLight } from "./dashboardtheme/DashboardLight";
import { DashboardDark } from "./dashboardtheme/DashboardDark";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, appType }) => {
  // appType = "public" | "dashboard"

  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  let theme;

  if (appType === "dashboard") {
    theme = mode === "light" ? DashboardLight : DashboardDark;
  } else {
    theme = mode === "light" ? PublicLight : PublicDark;
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
