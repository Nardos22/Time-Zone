import React from "react";

export default function City(props) {

let { city } = props;
let  { image, country, time } = city;

return <div className="city">
  <img src={image} />
  <h3>{country}</h3>
  <h3>{time}</h3>
</div>
}

