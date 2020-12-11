import axios from "axios";
import React, { useState } from "react";
import Countries from "./Countries";

const Region = ({ regions }) => {
  const [countries, setCountries] = useState([]);
  const onClickSearch = (item) => {
    //console.log(item);

    const search = async () => {
      const response = await axios.get(
        "https://restcountries.eu/rest/v2/region/" + item
      );
      console.log(response.data);
      setCountries(response.data);
    };
    search();
  };

  const renderRegions = regions.map((item) => {
    //console.log(item);
    return (
      <button
        onClick={() => onClickSearch(item)}
        key={item}
        className="ui button"
      >
        {item}
      </button>
    );
  });
  return (
    <div>
      <div className="ui five buttons">{renderRegions}</div>
      <Countries countries={countries} />
    </div>
  );
};

export default Region;
