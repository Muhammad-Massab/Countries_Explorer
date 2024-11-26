import React from "react";

interface SearchInputProps {
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country"
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchInput;
