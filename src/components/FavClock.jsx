
import DigitalClock from "./DigitalClock"
import  AnalogClock, {  Themes } from "react-analog-clock";
import  "moment";
import moment from  'moment-timezone' ;
const FavClock = (props) => {
  let tz ;
  props.tz != undefined ? tz =  moment().tz(props.tz) : tz= moment();
return <div className="fav-clock">
       <div className="fav-analog-clock"> <AnalogClock gmtOffset={(tz.utcOffset()/60).toFixed(2).toString()}  width={170} theme={Themes.light} /> </div>
      <div className="fav-clock-col"></div>
      <div className="fav-city-name">{props.city_name} </div>
     <div className="fav-digital-clock"> <DigitalClock   tz={props.tz} /></div>
  </div>
};

export default FavClock;