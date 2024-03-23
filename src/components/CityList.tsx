import React from "react";

interface CityListProps {
  cities: string[];
  onCitySelect: (city: string) => void;
}

export const CityList: React.FC<CityListProps> = ({ cities, onCitySelect }) => {
  return (
    <div>
      <h2>Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => onCitySelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};
