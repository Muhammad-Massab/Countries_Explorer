import axios from "axios";

// Access environment variables using import.meta.env
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

if (!WEATHER_API_KEY || !BASE_URL) {
  throw new Error("Environment variables for API key or base URL are missing.");
}

export const getWeather = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: WEATHER_API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
