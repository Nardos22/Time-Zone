import React, { useState,useEffect } from "react";
import City from "./City";
import CityDetail  from "./CityDetail";


export default function CityList() {

  const [detailId, setDetailId] = useState(0);
    // state variable where we will store our list of cities
    const [cities, setCities]= useState([]);

    const [scrolmemory, setScrolMemory] = useState(0);

    useEffect(() => {
        const fetchcities = async () => {
          let rawData = await fetch("/json/cities.json");
          let res = await rawData.json();
          console.log(res);
          setCities(res);
        };
        fetchcities();
      }, []);

    function gotoDetail(id){
      setScrolMemory(window.scrollY);
      window.scrollTo(0,0);
      setDetailId(id);
    }

    function gotoList(){
      setDetailId(0);
      setTimeout(()=> window.scrollTo(0, scrolmemory), 100)
    }


return <>
{/* A list of cities */}
{
  !detailId && 
  cities.map(city => 
  <City 
    key = {city.id}
    {...{city, gotoDetail}}
  />) 
}

{/* Show detail about city */
  detailId && <CityDetail {...{
    city: cities.find(x => x.id === detailId),
    gotoList
  } }/>
}
</>
}