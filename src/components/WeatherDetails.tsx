import React from "react";

interface WeatherDetailsProps {
  weather: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Weather in {weather.name}</h3>
      <p>
        <span className="font-medium">Temperature:</span> {weather.main.temp}°C
      </p>
      <p>
        <span className="font-medium">Condition:</span> {weather.weather[0].description}
      </p>
      <p>
        <span className="font-medium">Wind Speed:</span> {weather.wind.speed} m/s
      </p>
    </div>
  );
};

export default WeatherDetails;
