// src/public_app/features/poets/poetslist/components/PoetsCard.jsx
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaLanguage,
  FaCalendarAlt,
  FaBookOpen,
  FaQuoteRight,
} from "react-icons/fa";

const PoetsCard = ({ poet }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      {/* Card Header with Gradient */}
      <div className="h-32 bg-gradient-to-r from-amber-400 to-yellow-400 relative">
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white">
            {poet.image ? (
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
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-amber-100">
                <span className="text-4xl font-bold text-amber-600">
                  {poet.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-14 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition">
            {poet.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{poet.bio}</p>
        </div>

        {/* Poet Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaGlobe className="text-amber-500" />
            <span>{poet.country}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaLanguage className="text-amber-500" />
            <span>{poet.language}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt className="text-amber-500" />
            <span>{poet.era}</span>
          </div>
        </div>

        {/* Famous Works Preview */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <FaBookOpen className="text-amber-500" /> Famous works:
          </p>
          <div className="flex flex-wrap gap-2">
            {poet.famousWorks.slice(0, 3).map((work, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs"
              >
                {work.title}
              </span>
            ))}
            {poet.famousWorks.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                +{poet.famousWorks.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Quote Preview */}
        <div className="bg-amber-50 rounded-lg p-3 mb-4">
          <FaQuoteRight className="text-amber-400 text-sm mb-1" />
          <p className="text-xs text-gray-600 italic line-clamp-2">
            "{poet.famousQuotes[0]}"
          </p>
        </div>

        {/* Action Button */}
        <Link
          to={`/poet/${poet.id}`}
          className="block w-full text-center bg-gradient-to-r from-amber-500 to-yellow-500 
            text-white py-2 rounded-lg hover:from-amber-600 hover:to-yellow-600 
            transition-all shadow-md hover:shadow-lg font-medium"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PoetsCard;
