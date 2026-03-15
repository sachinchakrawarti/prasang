// src/public_app/layout/navbar/navbarmobile/components/tabs/AITab.jsx
import { useState } from "react";
import { FaRobot, FaVolumeUp, FaCheck } from "react-icons/fa";

const aiLanguages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "ur", name: "اردو" },
  { code: "bn", name: "বাংলা" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
];

const AITab = ({ themeStyles }) => {
  const [aiTranslation, setAiTranslation] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [selectedLangs, setSelectedLangs] = useState(["en", "hi", "ur"]);
  const { iconColor, buttonBg } = themeStyles;

  const toggleLanguage = (code) => {
    if (selectedLangs.includes(code)) {
      setSelectedLangs(selectedLangs.filter((l) => l !== code));
    } else if (selectedLangs.length < 3) {
      setSelectedLangs([...selectedLangs, code]);
    }
  };

  return (
    <div className="space-y-4">
      {/* AI Translation Toggle */}
      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <div className="flex items-center gap-3">
          <FaRobot className={iconColor} />
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">
              AI Translation
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Real-time translation
            </p>
          </div>
        </div>
        <button
          onClick={() => setAiTranslation(!aiTranslation)}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            aiTranslation ? "bg-amber-500" : "bg-gray-300 dark:bg-gray-600"
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
      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
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
            audioEnabled ? "bg-amber-500" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              audioEnabled ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Language Selection */}
      {aiTranslation && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Languages ({selectedLangs.length}/3)
            </label>
          </div>
          <div className="space-y-2">
            {aiLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => toggleLanguage(lang.code)}
                disabled={
                  !selectedLangs.includes(lang.code) &&
                  selectedLangs.length >= 3
                }
                className={`flex items-center justify-between w-full p-3 rounded-xl transition ${
                  selectedLangs.includes(lang.code)
                    ? `${buttonBg} ${iconColor} font-medium`
                    : selectedLangs.length >= 3
                      ? "opacity-40 cursor-not-allowed text-gray-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span>{lang.name}</span>
                {selectedLangs.includes(lang.code) && (
                  <FaCheck className={iconColor} size={14} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AITab;
