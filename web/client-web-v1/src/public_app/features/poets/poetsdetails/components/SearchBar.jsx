// src/public_app/features/poets/poetslist/components/SearchBar.jsx
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>
  );
};

export default SearchBar;
