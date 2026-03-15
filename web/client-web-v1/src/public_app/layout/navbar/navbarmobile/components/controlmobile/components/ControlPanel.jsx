// src/public_app/layout/navbar/navbarmobile/components/ControlPanel.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaRobot,
  FaPalette,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import LiteratureTab from "./LiteratureTab";
import AITab from "./AITab";
import ThemeTab from "./ThemeTab";

const ControlPanel = ({ onClose, themeStyles }) => {
  const [activeTab, setActiveTab] = useState("literature");
  const { dropdownBg, headerBg, tabActiveColor, iconColor, buttonBg } =
    themeStyles;

  const tabs = [
    { id: "literature", label: "Literature", icon: <FaGlobe /> },
    { id: "ai", label: "AI", icon: <FaRobot /> },
    { id: "theme", label: "Theme", icon: <FaPalette /> },
  ];

  return (
    <div
      className={`fixed right-0 top-0 h-full w-full max-w-sm ${dropdownBg} shadow-2xl z-50 overflow-hidden`}
    >
      {/* Header */}
      <div className={`${headerBg} p-4 flex items-center justify-between`}>
        <h3 className="font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
          <AiFillControl className={iconColor} /> Controls
        </h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-black/10 rounded-full"
        >
          <FaTimes className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${
              activeTab === tab.id
                ? `${tabActiveColor} border-b-2`
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className="p-4 overflow-y-auto"
        style={{ height: "calc(100vh - 180px)" }}
      >
        {activeTab === "literature" && (
          <LiteratureTab themeStyles={themeStyles} />
        )}
        {activeTab === "ai" && <AITab themeStyles={themeStyles} />}
        {activeTab === "theme" && <ThemeTab themeStyles={themeStyles} />}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <Link
          to="/controls-preferences"
          onClick={onClose}
          className={`flex items-center justify-center gap-2 px-4 py-2 ${buttonBg} rounded-lg text-sm ${iconColor}`}
        >
          <span>Full Preferences</span>
          <FaExternalLinkAlt size={12} />
        </Link>
      </div>
    </div>
  );
};

export default ControlPanel;
