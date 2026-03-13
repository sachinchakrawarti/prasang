// src/public_app/features/poets/poetsdetails/components/PoetHeader.jsx
import { FaGlobe, FaLanguage, FaCalendarAlt, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const PoetHeader = ({ poet }) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl p-8 mb-8 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Poet Image */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img
            src={poet.image}
            alt={poet.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                poet.name,
              )}&background=amber&color=fff&size=96`;
            }}
          />
        </div>

        {/* Poet Basic Info */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{poet.name}</h1>
          <p className="text-amber-100 mb-3">{poet.fullName}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <FaGlobe /> {poet.country}
            </span>
            <span className="flex items-center gap-1">
              <FaLanguage /> {poet.language}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt /> {poet.era}
            </span>
          </div>
        </div>

        {/* Share Button */}
        <button className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition">
          <FaShare />
        </button>
      </div>
    </div>
  );
};

export default PoetHeader;
