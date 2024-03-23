import React from "react";
import { useParams } from "react-router-dom";
import { WeatherPanel } from "../../components/WeatherPanel";
import { useWeatherForecast } from "../../hooks/useWeatherForecast";

interface RouteParams {
  city: string;
  latitude: string;
  longitude: string;
}

export const CityWeatherPage: React.FC = () => {
  const { city, latitude, longitude } = useParams<RouteParams>();

  const { data: weatherForecast, isLoading: isWeatherLoading } =
    useWeatherForecast(parseFloat(latitude), parseFloat(longitude));

  if (isWeatherLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherForecast) {
    return <div>No data</div>;
  }

  return (
    <div>
      <WeatherPanel city={city} weatherForecast={weatherForecast} />
    </div>
  );
};