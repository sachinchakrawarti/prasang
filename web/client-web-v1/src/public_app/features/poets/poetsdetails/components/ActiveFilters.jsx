// src/public_app/features/poets/poetslist/components/ActiveFilters.jsx
import { FaLanguage, FaCalendarAlt } from "react-icons/fa";

const ActiveFilters = ({ filters, onClear }) => {
  const filterIcons = {
    language: FaLanguage,
    era: FaCalendarAlt,
  };

  if (Object.keys(filters).length === 0) return null;

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm text-gray-500">Active filters:</span>
      {Object.entries(filters).map(([key, value]) => {
        if (value === "all") return null;
        const Icon = filterIcons[key] || FaLanguage;
        return (
          <span
            key={key}
            className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1"
          >
            <Icon className="text-xs" /> {value}
            <button
              onClick={() => onClear(key)}
              className="ml-1 hover:text-amber-900"
            >
              ×
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default ActiveFilters;
