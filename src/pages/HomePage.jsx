import React, { useState } from "react";
import Clock from  "react-digital-clock"
import  AnalogClock, {  Themes } from "react-analog-clock";

let clocks = [
  "Analog" ,
  "Digital" 
]

const HomePage = () => {

  const [activeClock , setActiveClock] = useState(1);
return <div id="home">
  <div id = "clocks-container">
     {
      activeClock == 0 ? <div className="digital-clock"> <div> <Clock hour12={false} />
      </div></div> :
       <AnalogClock width={250} style="{'border' : '6.5px solid rgb(236, 236, 236)'}" theme={Themes.light} />  
      }
{/*  */}
<button className="toggle-clocks" onClick={() => { setActiveClock(activeClock == 0 ? 1 : 0) }}>
      Show {clocks[activeClock]}  </button>
        </div>
</div>

}
export default HomePage;