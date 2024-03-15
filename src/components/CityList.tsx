import { useState } from "react";
import { Link } from "react-router-dom";
import { City } from "../interface";

interface CityListProps {
  cities: City[];
  filterWord: string;
  setFilterWord: React.Dispatch<React.SetStateAction<string>>;
}

const CityList = ({ cities, filterWord, setFilterWord }: CityListProps) => {
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <div className="city-list">
      <input
        className="search-input"
        placeholder="Filter"
        value={filterWord}
        onChange={(e) => setFilterWord(e.target.value)}
      />
      {filteredCities.map((city) => (
        <Link key={city.id} to={`/cities/${city.id}`}>
          {city.name}
        </Link>
      ))}
    </div>
  );
};

export default CityList;
