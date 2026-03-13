// src/public_app/features/poets/poetslist/components/FilterSection.jsx
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import ActiveFilters from "./ActiveFilters";
import { FaLanguage, FaCalendarAlt } from "react-icons/fa";

const FilterSection = ({
  searchTerm,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  selectedEra,
  onEraChange,
  languageOptions,
  eraOptions,
  activeFilters,
  onClearFilter,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchBar
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search poets..."
        />

        <FilterDropdown
          icon={FaLanguage}
          value={selectedLanguage}
          onChange={onLanguageChange}
          options={languageOptions}
          placeholder="All Languages"
        />

        <FilterDropdown
          icon={FaCalendarAlt}
          value={selectedEra}
          onChange={onEraChange}
          options={eraOptions}
          placeholder="All Eras"
        />
      </div>

      <ActiveFilters filters={activeFilters} onClear={onClearFilter} />
    </div>
  );
};

export default FilterSection;
