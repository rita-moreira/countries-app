import React, { useState } from "react";

const Countries = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState("");
  const renderCountries = countries.map((item) => {
    const onClickShowInf = (item) => {
      //console.log(item.name);
      setCurrentCountry(item.name);
    };

    return (
      <div key={item.name} className="item">
        <img className=" ui avatar image" src={item.flag} alt={item.name} />
        <div className="content">
          <button onClick={() => onClickShowInf(item)} className="header">
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
