import React from "react";
import { Link } from "react-router-dom";
import logo from '../components/logo.png';


const TopNavBar = () => {
  return (
      <div className="menu-items">
        <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/worldmap">Worldmap</Link>
        <Link to="/favorite">Favorite</Link>
        <input type="text" className="searchItem" id="search"
         placeholder="Search city/timezone" />
        <button type="submit" className="searchButton">Search</button>
      </div>
     
  );
};

export default TopNavBar;

