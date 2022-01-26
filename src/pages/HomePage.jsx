import React, { useState } from "react";
import Clock from  "react-digital-clock"
import AnalogueClock from 'react-analogue-clock';
let analogClockOptions = {
  baseColor: '#ffffff',
  borderColor: '#000000',
  borderWidth: 5,
  centerColor: '#000000',
  handColors: {
      hour: '#000000',
      minute: '#000000',
      second: '#000000',
  },
  notchColor: '#000000',
  numbersColor: '#000000',
  showNumbers: true,
  size: 250
};

let clocks = [
  "Analog" ,
  "Digital" 
]

const HomePage = () => {

  const [activeClock , setActiveClock] = useState(0);
return <div id="home">
        <div id = "clocks-container">
              {
                activeClock == 0 ? <div className="digital-clock"> <div> <Clock/> </div></div> :  <AnalogueClock  {...analogClockOptions} />  
              }

              <button className="toggle-clocks" onClick={() => { setActiveClock(activeClock == 0 ? 1 : 0) }}> Show {clocks[activeClock]}  </button>
        </div>
</div>

}
export default HomePage;