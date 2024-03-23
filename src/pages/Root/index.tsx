import React from "react";
import { SearchBar } from "../../components/SearchBar";
import { CityList } from "../../components/CityList";
import { useCitySearch } from "../../hooks/useCitySearch";

export const Root: React.FC = () => {
  const { data: cities, isLoading: isCitiesLoading } = useCitySearch("");

  const handleSearch = (query: string) => {
    // Обработать поиск городов и отобразить результаты в CityList
  };

  if (isCitiesLoading) {
    return <div>Loading...</div>;
  }

  if (!cities) {
    return <div>No data</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CityList cities={cities} onCitySelect={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};
