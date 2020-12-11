import React from "react";

const InfoCountries = ({ country }) => {
  console.log(country);
  return (
    <div>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      {/* <p>Languages: {country.languages[0].name}</p> */}
    </div>
  );
};

export default InfoCountries;
