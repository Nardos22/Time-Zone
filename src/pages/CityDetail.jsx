import DetailClock from "../components/DetailClock";

export default function CityDetail(props) {

  let {city} = props;
  let{id, country, cityName, description, image, timeZone} = city;
  
  return  <div className="city-detail">
    <img src={image} />
   <div className='text'>
      <h1>
         {cityName}, {country}
      </h1>
      <div className="description">
        {description.split('\n\n').map((paragraph, i) =>
        <p key = {i}>
          {paragraph}
        </p>)
        }
      </div>
      <div>
      <DetailClock key={city.id} tz={city.timeZone.replace("," , '/')} />
      </div>   
    </div>
  </div>
  }