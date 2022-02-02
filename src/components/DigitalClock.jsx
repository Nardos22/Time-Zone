import { useState, useEffect } from 'react';
import  "moment";
import moment from  'moment-timezone' ;
const clockTile = {
  color: 'white',
  textAlign:'center'
}
const clockSpan = {
  padding : '4px'
}

const  DigitalClock = (props) => {
  let tz = props.tz ;
  const [date, setDate] = useState( tz != undefined ?  moment().tz(tz) :  moment());
  
  function refreshClock() {

    setDate( tz != undefined ?  moment().tz(tz) :  moment());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
     <div style={clockTile}>
     <span style={clockSpan}>{date.format("HH:mm:ss")}</span>
     </div>
  );
}
export default DigitalClock;