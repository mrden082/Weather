import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import CityList from "../../components/CityList";
import { City } from "../../interface";

export const loader = async () => {
  const cities = await getCity();

  return { cities };
};

const Root = () => {
  const { cities } = useLoaderData() as {
    cities: City[];
  };
  const [filterWord, setFilterWord] = useState<string>("");

  return (
    <div className="root-cont">
      <div className="left-panel">
        <CityList
          cities={cities}
          filterWord={filterWord}
          setFilterWord={setFilterWord}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
