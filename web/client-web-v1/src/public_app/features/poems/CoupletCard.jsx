// src/public_app/features/poems/CoupletCard.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaQuoteRight,
  FaUser,
  FaGlobe,
  FaLanguage,
  FaRobot,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { getCoupletById } from "./CoupletData";

const CoupletCard = ({ coupletId }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showRomanization, setShowRomanization] = useState(false);
  const couplet = getCoupletById(coupletId);

  if (!couplet) return null;

  const firstLine = couplet.original.text.split("\n")[0];
  const isRTL =
    couplet.language === "urdu" ||
    couplet.language === "arabic" ||
    couplet.language === "persian";

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100 overflow-hidden">
      <Link to={`/couplet/${couplet.id}`} className="block p-5">
        {/* Header with language badge */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {couplet.poet.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 group-hover:text-amber-600 transition">
                {couplet.poet.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaLanguage size={10} /> {couplet.language}
                </span>
                <span className="flex items-center gap-1">
                  <FaGlobe size={10} /> {couplet.poet.region}
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
            {couplet.form}
          </span>
        </div>

        {/* Original text preview */}
        <div className={`mb-2 ${isRTL ? "text-right" : "text-left"}`}>
          <p className="text-lg font-serif text-gray-700 line-clamp-2">
            {firstLine}
          </p>
        </div>

        {/* Romanization toggle */}
        {couplet.original.romanization && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowRomanization(!showRomanization);
            }}
            className="flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 mb-2"
          >
            <FaLanguage size={12} />
            {showRomanization ? "Hide" : "Show"} Romanization
            {showRomanization ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </button>
        )}

        {/* Romanization text */}
        {showRomanization && couplet.original.romanization && (
          <div className="mb-3 text-xs text-gray-500 italic border-l-2 border-amber-300 pl-2">
            {couplet.original.romanization.split("\n")[0]}
          </div>
        )}

        {/* Translation toggle */}
        {couplet.aiTranslations && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTranslation(!showTranslation);
            }}
            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700 mb-2"
          >
            <FaRobot size={12} />
            {showTranslation ? "Hide" : "Show"} English Translation
            {showTranslation ? (
              <FaChevronUp size={10} />
            ) : (
              <FaChevronDown size={10} />
            )}
          </button>
        )}

        {/* Translation preview */}
        {showTranslation && couplet.aiTranslations.english && (
          <div className="mb-3 text-xs text-gray-600 italic bg-purple-50 p-2 rounded">
            "{couplet.aiTranslations.english.split("\n")[0]}"
          </div>
        )}

        {/* Themes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {couplet.themes.slice(0, 2).map((theme, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded"
            >
              #{theme}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{couplet.year}</span>
          <FaQuoteRight className="text-amber-300 group-hover:text-amber-400 transition" />
        </div>
      </Link>
    </div>
  );
};

export default CoupletCard;
