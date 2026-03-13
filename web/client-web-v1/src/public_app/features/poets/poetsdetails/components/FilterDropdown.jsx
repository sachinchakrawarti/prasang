// src/public_app/features/poets/poetslist/components/FilterDropdown.jsx
import { FaLanguage, FaCalendarAlt } from "react-icons/fa";

const FilterDropdown = ({
  icon: Icon,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
