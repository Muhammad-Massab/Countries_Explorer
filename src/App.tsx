import React from "react";
import CountrySearch from "./components/CountrySearch";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Countries Explorer
      </h1>
      <CountrySearch />
    </div>
  );
};

export default App;
