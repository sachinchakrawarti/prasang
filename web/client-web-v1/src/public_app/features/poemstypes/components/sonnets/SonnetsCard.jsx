// src/public_app/features/poemstypes/components/sonnets/SonnetsCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaGlobe,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";

const SonnetsCard = ({ poet }) => {
  return (
    <Link
      to={poet.path}
      className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100"
    >
      {/* Card Header with Gradient */}
      <div className={`h-24 bg-gradient-to-r ${poet.color} relative`}>
        {/* Poet Image Overlay */}
        <div className="absolute -bottom-10 left-4">
          <div className="w-20 h-20 rounded-xl border-4 border-white shadow-lg overflow-hidden">
            <img
              src={poet.image}
              alt={poet.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  poet.name,
                )}&background=amber&color=fff&size=80`;
              }}
            />
          </div>
        </div>

        {/* Era Badge */}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs text-white flex items-center gap-1">
            <FaCalendarAlt className="text-xs" /> {poet.era}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-12 p-5">
        {/* Poet Name and Country */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-amber-600 transition">
            {poet.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <FaGlobe className="text-amber-500" /> {poet.country}
            </span>
          </div>
        </div>

        {/* Famous Sonnet */}
        <div className="mb-3">
          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            {poet.famousSonnet}
          </span>
        </div>

        {/* Preview Quote */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-3 mb-3">
          <FaQuoteLeft className="text-amber-300 text-xs mb-1" />
          <p className="text-xs text-gray-600 italic whitespace-pre-line line-clamp-2">
            {poet.preview}
          </p>
        </div>

        {/* Stats and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <FaBookOpen className="text-amber-500" /> {poet.sonnetsCount}{" "}
            sonnets
          </span>
          <span className="text-amber-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SonnetsCard;
