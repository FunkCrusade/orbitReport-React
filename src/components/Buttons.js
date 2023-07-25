import satData from "./satData";
import React from "react";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((satType, index) => (
        <button onClick={() => filterByType(satType)} key={index}>
          {satType} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button> 
    </div>
  );
};

export default Buttons;