import React, { useState } from "react";
import FavClock from "../components/FavClock";
import cities from "../../public/json/cities.json"


const FavoritePage = () => {
  let [showModel , setShowModel] = useState(false);
  let [queue , setQueue] = useState(cities.slice(0 , 4));
return <div id="favorite">
    <div id="show-fav-cities">
        <div ></div>
        <div>
          {queue.map( (   city ) => {  return  <FavClock key={city.id} city_name={city.cityName} tz={city.timeZone.replace("," , '/')} />})}
        </div>
    </div>
    <button id="btn-add-city" onClick={() => { setShowModel(true) }}>+ Add City </button>
    <div id="model-for-cities" style={ { display :  ( !showModel ?  'none' : "" ) }  }>
        <div>
        <span onClick={() => {setShowModel(false)}}>X</span>
        <div id="model-cities-container">
          {cities.filter((city) => { return !queue.find((cityInQueue) => { return city.id == cityInQueue.id}) }).map((city) => {
                  return  <div key={city.id} onClick={() => {  queue.push(city) ;  queue.shift( ) ; setQueue(queue); setShowModel(false)}} className="model-show-city">
                        <img src={city.image} alt ={city.city} />
                        <div className="model-show-city-info">
                          <div>
                              <b>Country : </b>
                              <span>{city.country}</span>
                          </div>
                          <div>
                              <b>City : </b>
                              <span>{city.city}</span>
                          </div>
                          <div>
                              <b>T.Z : </b>
                              <span>{city.timeZone}</span>
                          </div>
                        </div>
                </div>
          })}
        </div>
        </div> 
    </div>
  
  </div>;
};

export default FavoritePage;

