import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import { useWeather } from "../hooks/useWeather";
import CountryList from "./CountryList";
import WeatherDetails from "./WeatherDetails";
import SearchInput from "./SearchInput";

const CountrySearch: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const { weather, fetchWeather } = useWeather();
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { name: search },
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleCountryClick = (countryName: string, capital: string) => {
    setSelectedCountry(countryName);
    fetchWeather(capital);
  };

  const countries = data?.countries || [];

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-8">
      <div className="flex-1 space-y-4">
        <SearchInput onSearchChange={handleSearchChange} />
        {loading && <p className="text-gray-600">Loading countries...</p>}
        {error && <p className="text-red-600">Error: {error.message}</p>}
        {!loading && !error && countries.length === 0 && (
          <p className="text-gray-600">No data found for "{search}".</p>
        )}
        {countries.length > 0 && (
          <CountryList
            countries={countries}
            onCountryClick={handleCountryClick}
            selectedCountry={selectedCountry}
          />
        )}
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6">
        {weather ? (
          <WeatherDetails weather={weather} />
        ) : (
          <p className="text-gray-500">Select a country to view weather details</p>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;
