import { useQuery } from 'react-query';
import { getWeatherForecast } from '../services/openMeteoAPI';

interface WeatherForecastData {
  // Определите тип данных для прогноза погоды
}

export const useWeatherForecast = (latitude: number, longitude: number) => {
  return useQuery<WeatherForecastData>(['weatherForecast', latitude, longitude], () => getWeatherForecast(latitude, longitude));
};
