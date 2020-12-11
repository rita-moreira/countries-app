import React from "react";
import Region from "./components/Region";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const App = () => {
  return (
    <div>
      <Region regions={regions} />
    </div>
  );
};

export default App;
