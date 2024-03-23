import axios from 'axios';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast';

export const searchCities = async (query: string) => {
  const response = await axios.get(`${GEOCODING_API_URL}?name=${query}&start=0&count=10&language=en&format=json`);
  return response.data;
};

export const getWeatherForecast = async (latitude: number, longitude: number) => {
  const response = await axios.get(`${FORECAST_API_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
  return response.data;
};
