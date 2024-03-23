import React from "react";
import { useWeatherForecast } from "../hooks/useWeatherForecast";

interface WeatherPanelProps {
  city?: string;
  weatherForecast: WeatherForecastData;
}


export const WeatherPanel: React.FC<WeatherPanelProps> = ({ city }) => {
  const { data, isLoading } = useWeatherForecast(city);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h2>Weather forecast for {city}</h2>
      // Выводим прогноз погоды
    </div>
  );
};
