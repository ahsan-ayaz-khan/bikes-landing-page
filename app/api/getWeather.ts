"use server";

import axiosClient from "./axiosClient";

export interface WeatherData {
  temperature: number;
  condition: string;
  iconUrl: string;
  windSpeed: number;
}

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    throw new Error("WEATHER_API_KEY is not configured");
  }

  const response = await axiosClient.get(
    "https://api.weatherapi.com/v1/current.json",
    {
      params: {
        key: apiKey,
        q: `${latitude},${longitude}`,
      },
    }
  );

  const { current } = response.data;

  return {
    temperature: Math.round(current.temp_c),
    condition: current.condition.text as string,
    iconUrl: `https:${current.condition.icon}` as string,
    windSpeed: Math.round(current.wind_kph),
  };
}
