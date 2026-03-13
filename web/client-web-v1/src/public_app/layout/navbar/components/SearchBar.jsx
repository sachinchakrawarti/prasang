// src/public_app/layout/navbar/components/SearchBar.jsx
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ mobile = false, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchQuery("");
      if (onClose) onClose();
    }
  };

  if (mobile) {
    return (
      <div className="md:hidden py-3 border-t border-amber-200 dark:border-amber-800">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search poems, poets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-amber-200 dark:border-amber-800 
              bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white 
              focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
            autoFocus
          />
          <FaSearch
            className="absolute left-3 top-3 text-amber-400 dark:text-amber-600"
            size={16}
          />
        </form>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className="hidden md:block relative flex-1 max-w-md mx-4"
    >
      <input
        type="text"
        placeholder="Search poems, poets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-amber-200 dark:border-amber-800 
          bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white 
          focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600
          placeholder:text-amber-400 dark:placeholder:text-amber-600"
      />
      <FaSearch
        className="absolute left-3 top-3 text-amber-400 dark:text-amber-600"
        size={16}
      />
    </form>
  );
};

export default SearchBar;
