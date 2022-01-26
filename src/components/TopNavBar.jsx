import React from "react";
import { Link } from "react-router-dom";
import logo from '/images/logo.png';


const TopNavBar = () => {
  return (
      <div className="menu-items">
        <div className="logoContent">
          <Link to="/"><div className="logo"><img src={logo} alt="" /> <span>TimeZone</span> </div></Link>
        </div>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/favorite">Favorite</Link>
      </div>
     
  );
};

export default TopNavBar;

