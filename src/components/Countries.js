import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = ({ region }) => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");

  //run at the beginning and everytime region changes
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(
        "https://restcountries.eu/rest/v2/region/" + region
      );
      //console.log(response.data);
      setCountries(response.data);
      //para que ao mudar de regiao o país deixe de estar selecionado, senão guarda
      setCurrentCountry("");
    };
    search();
  }, [region]);

  const renderCountries = countries.map((item) => {
    return (
      <div key={item.name} className="item">
        <img className=" ui avatar image" src={item.flag} alt={item.name} />
        <div className="content">
          <button
            onClick={() => setCurrentCountry(item.name)}
            className="header"
          >
            {item.name}
          </button>
          {currentCountry === item.name ? (
            <div>
              <p>Capital: {item.capital}</p>
              <p>Region: {item.region}</p>
              <p>Subregion: {item.subregion}</p>
              <p>Population: {item.population}</p>
              <p>Languages: {item.languages[0].name}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  });
  return (
    <div className="ui middle aligned divided list">{renderCountries}</div>
  );
};
export default Countries;
