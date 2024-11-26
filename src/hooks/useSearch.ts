import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return { search, handleSearchChange };
};
