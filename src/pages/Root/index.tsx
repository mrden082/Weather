import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import CityList from "../../components/CityList";
import { City } from "../../interface";

interface RootProps {
  cities: City[];
}

const Root: React.FC<RootProps> = ({ cities }) => {
  const [filterWord, setFilterWord] = React.useState<string>("");
  const [selectedCity, setSelectedCity] = React.useState<City | null>(
    cities[0]
  );

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  const handleCitySelect = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="root-cont">
      <div className="left panel">
        <CityList
          cities={filteredCities}
          filterWord={filterWord}
          setFilterWord={setFilterWord}
          onCitySelect={handleCitySelect}
          defaultCity={selectedCity}
        />
      </div>
    </div>
  );
};

export default Root;
