import React, { useState } from "react";
import Countries from "./Countries";

const Region = ({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState("europe");

  const renderRegions = regions.map((item) => {
    //console.log(item);
    return (
      <button
        onClick={() => setSelectedRegion(item)}
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
      <Countries region={selectedRegion} />
    </div>
  );
};

export default Region;
