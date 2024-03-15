import { getWeather, getCity } from "../../dataWeathers";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { Weather, City } from "../../interface";
import { Button } from "@mui/joy";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const weatherId = Number(params.weatherId) || 0;
  const weather = await getWeather(weatherId);
  const cityId = weather.cityId; // Получаем идентификатор города из полученных погодных данных
  const city = await getCity(cityId); // Используем идентификатор города для получения данных о городе

  return { weather, city };
};

const CityWeatherPage = () => {
  const { weather, city } = useLoaderData() as {
    weather: Weather;
    city: City;
  };

  return (
    <div className="contact-cont">
      <h1>Weather in {city.name}</h1>
      <div className="weather__details">
        <h2>Weather Details</h2>
        <div>Temperature: {weather.temperature}</div>
        <div>Description: {weather.description}</div>
        <div>Humidity: {weather.humidity}</div>
        <div>Wind Speed: {weather.windSpeed}</div>
      </div>
    </div>
  );
};

export default CityWeatherPage;
