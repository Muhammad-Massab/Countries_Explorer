import React from "react";

interface Country {
  name: string;
  capital: string;
  emoji: string;
}

interface CountryListProps {
  countries: Country[];
  onCountryClick: (countryName: string, capital: string) => void;
  selectedCountry: string | null;
}

const CountryList: React.FC<CountryListProps> = ({
  countries,
  onCountryClick,
  selectedCountry,
}) => {
  return (
    <div className="max-h-96 overflow-y-auto border border-gray-300 rounded-lg bg-white shadow">
      <ul className="divide-y divide-gray-200">
        {countries.map((country) => (
          <li
            key={country.name}
            className={`p-4 cursor-pointer flex items-center space-x-4 ${
              selectedCountry === country.name ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
            onClick={() => onCountryClick(country.name, country.capital)}
          >
            <span className="text-2xl">{country.emoji}</span>
            <div>
              <h4 className="font-semibold">{country.name}</h4>
              <p className="text-sm text-gray-600">Capital: {country.capital}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
