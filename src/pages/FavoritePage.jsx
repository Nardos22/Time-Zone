import React from "react";
import fav from "./../components/home.jpg"
import "./../css/FavoritePage.css"
const FavoritePage = () => {
    return <div id="favorite">
      <div id="favorite-background-image">
          <img   src={fav}/>
      </div>
      <div id="favorite-content">

      </div>

  </div>;
};

export default FavoritePage;

