// src/public_app/layout/navbar/navbarmobile/components/ControlMobile.jsx
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../../../../../theme";
import ControlButton from "./components/ControlButton";
import ControlPanel from "./components/ControlPanel";
import ControlBackdrop from "./components/ControlBackdrop";

const ControlMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { themeName } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Theme styles
  const getThemeStyles = () => {
    const baseStyles = {
      dropdownBg: "bg-white dark:bg-gray-900",
      headerBg: "bg-amber-100 dark:bg-amber-800",
      tabActiveColor: "text-amber-600 dark:text-amber-400 border-amber-600",
      iconColor: "text-amber-600 dark:text-amber-400",
      buttonBg: "hover:bg-amber-100 dark:hover:bg-amber-800",
    };

    switch (themeName) {
      case "forest":
        return {
          dropdownBg: "bg-green-50 dark:bg-green-900/95",
          headerBg: "bg-green-100 dark:bg-green-800",
          tabActiveColor: "text-green-600 dark:text-green-400 border-green-600",
          iconColor: "text-green-600 dark:text-green-400",
          buttonBg: "hover:bg-green-100 dark:hover:bg-green-800",
        };
      case "lavender":
        return {
          dropdownBg: "bg-purple-50 dark:bg-purple-900/95",
          headerBg: "bg-purple-100 dark:bg-purple-800",
          tabActiveColor:
            "text-purple-600 dark:text-purple-400 border-purple-600",
          iconColor: "text-purple-600 dark:text-purple-400",
          buttonBg: "hover:bg-purple-100 dark:hover:bg-purple-800",
        };
      case "rose":
        return {
          dropdownBg: "bg-rose-50 dark:bg-rose-900/95",
          headerBg: "bg-rose-100 dark:bg-rose-800",
          tabActiveColor: "text-rose-600 dark:text-rose-400 border-rose-600",
          iconColor: "text-rose-600 dark:text-rose-400",
          buttonBg: "hover:bg-rose-100 dark:hover:bg-rose-800",
        };
      case "sepia":
        return {
          dropdownBg: "bg-amber-50 dark:bg-amber-900/95",
          headerBg: "bg-amber-100 dark:bg-amber-800",
          tabActiveColor: "text-amber-600 dark:text-amber-400 border-amber-600",
          iconColor: "text-amber-600 dark:text-amber-400",
          buttonBg: "hover:bg-amber-100 dark:hover:bg-amber-800",
        };
      case "dark":
        return {
          dropdownBg: "bg-gray-900",
          headerBg: "bg-gray-800",
          tabActiveColor: "text-gray-300 border-gray-300",
          iconColor: "text-gray-400",
          buttonBg: "hover:bg-gray-700",
        };
      default:
        return baseStyles;
    }
  };

  const themeStyles = getThemeStyles();

  return (
    <div className="relative" ref={dropdownRef}>
      <ControlButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        iconColor={themeStyles.iconColor}
        buttonBg={themeStyles.buttonBg}
      />

      {isOpen && (
        <>
          <ControlBackdrop onClick={() => setIsOpen(false)} />
          <ControlPanel
            onClose={() => setIsOpen(false)}
            themeStyles={themeStyles}
          />
        </>
      )}
    </div>
  );
};

export default ControlMobile;
