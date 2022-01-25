import React from "react";
import AnalogClock from 'analog-clock-react'
import home from "/home.jpg"


let analogClockOptions = {
  width: "150px",
  border: true,
  borderColor: "#2e2e2e",
  baseColor: "#17a2b8",
  centerColor: "#459cff",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "#d81c7a",
    minute: "#ffffff",
    hour: "#ffffff"
  }
};





const HomePage = () => {
return <div id="home">
<div id="home-background-image">
    <img   src={home}/>
</div>
<div id="home-content">
        <div id = "clocks-container">
              <div id="digital-clock"></div>
              <div id="analog-clock">
                    <AnalogClock  {...analogClockOptions} />
              </div>
        </div>
        <div >
            <h3>    </h3>
        </div>
</div>

</div>
}
export default HomePage;