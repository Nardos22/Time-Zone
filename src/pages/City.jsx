

export default function City(props) {

let { city, gotoDetail } = props;
let  {id, image, cityName, timeZone, country } = city;

return <div className="city-list" onClick={() => gotoDetail(id)}>
  <div className="city">
    <img src= {image} />
    <h1><span>City: </span>{cityName}</h1>
    <h3>{country}</h3>
  </div>
</div>
    
}