import React from "react";
import Carrousel from './Carrousel'
import Countdown from './Countdown';

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>

      <Carrousel />
    
      {/* <div className="international_name">
        <div className="wrapper">Dota 2 International</div>
      </div> */}

     <Countdown />
    </div>
  );
};

export default Featured;
