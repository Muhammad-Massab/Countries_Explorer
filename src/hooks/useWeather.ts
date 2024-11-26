import { useState } from "react";
import { getWeather } from "../api/weather";

interface Weather {
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
}

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    try {
      const data: Weather = await getWeather(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { weather, error, loading, fetchWeather };
};
