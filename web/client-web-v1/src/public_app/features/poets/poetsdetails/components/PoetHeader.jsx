// src/public_app/features/poets/poetsdetails/components/PoetHeader.jsx
import { FaGlobe, FaLanguage, FaCalendarAlt, FaShare } from "react-icons/fa";
import { useTheme } from "../../../../../theme";
import { useLanguage } from "../../../../../context/LanguageContext";
import { useState } from "react";

const PoetHeader = ({ poet }) => {
  const { themeName } = useTheme();
  const { language } = useLanguage();
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  // Theme-based gradient helpers
  const getHeaderGradient = () => {
    switch (themeName) {
      case "forest":
        return "from-green-600 to-emerald-600";
      case "lavender":
        return "from-purple-600 to-pink-600";
      case "rose":
        return "from-rose-600 to-pink-600";
      case "sepia":
        return "from-amber-600 to-yellow-600";
      case "dark":
        return "from-gray-800 to-gray-900";
      default:
        return "from-amber-500 to-yellow-500";
    }
  };

  const getShareButtonHover = () => {
    switch (themeName) {
      case "forest":
        return "hover:bg-green-600/30";
      case "lavender":
        return "hover:bg-purple-600/30";
      case "rose":
        return "hover:bg-rose-600/30";
      case "sepia":
        return "hover:bg-amber-600/30";
      case "dark":
        return "hover:bg-gray-600/30";
      default:
        return "hover:bg-amber-600/30";
    }
  };

  const getTooltipBg = () => {
    switch (themeName) {
      case "forest":
        return "bg-green-800";
      case "lavender":
        return "bg-purple-800";
      case "rose":
        return "bg-rose-800";
      case "sepia":
        return "bg-amber-800";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-amber-800";
    }
  };

  const headerGradient = getHeaderGradient();
  const shareButtonHover = getShareButtonHover();
  const tooltipBg = getTooltipBg();

  const handleShare = async () => {
    const shareData = {
      title: poet.name,
      text: `Check out ${poet.name} on Prasang Poetry Platform`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Use Web Share API if available (mobile devices)
        await navigator.share(shareData);
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      }
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${headerGradient} rounded-3xl p-8 mb-8 text-white relative`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Poet Image */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src={poet?.image}
            alt={poet?.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                poet?.name || "Poet",
              )}&background=amber&color=fff&size=96`;
            }}
          />
        </div>

        {/* Poet Basic Info */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {poet?.name || "Unknown Poet"}
          </h1>
          <p className="text-amber-100 mb-3">
            {poet?.fullName || poet?.name || ""}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaGlobe /> {poet?.country || "Unknown"}
            </span>
            <span className="flex items-center gap-1">
              <FaLanguage /> {poet?.language || "Unknown"}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt /> {poet?.era || "Unknown"}
            </span>
          </div>
        </div>

        {/* Share Button with Tooltip */}
        <div className="relative">
          <button
            onClick={handleShare}
            className={`p-3 bg-white/20 rounded-xl ${shareButtonHover} transition relative`}
            aria-label="Share poet profile"
          >
            <FaShare />
          </button>

          {/* Copy success tooltip */}
          {showShareTooltip && (
            <div
              className={`absolute top-full right-0 mt-2 ${tooltipBg} text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap z-10`}
            >
              Link copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoetHeader;
