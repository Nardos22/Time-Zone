import React, { useState,useEffect } from "react";
import City from "./City";
import CityDetail  from "./CityDetail";

export default function CityList() {
    // state variable where we will store our list of cities
    const [cities, setCities]= useState([]);

    useEffect(() => {
        const fetchcities = async () => {
          let rawData = await fetch("/public/json/cities.json");
          let res = await rawData.json();
          console.log(res);
          setCities(res);
        };
        fetchcities();
      }, []);

return <>
{/* A list of cities */}
{cities.map(city => <City city={city}/>) }

{/* Show detail about city */}
<CityDetail/>
</>
}