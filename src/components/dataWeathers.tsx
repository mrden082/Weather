import { useQuery } from "react-query";
import axios from "axios";

export const getCity = () => {
  return useQuery("contacts", async () => {
    const { data } = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json"
    );
    return data;
  });
};

export const getWeather = (id: number) => {
  return useQuery(["contact", id], async () => {
    const { data } = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
    );
    return data[id];
  });
};
