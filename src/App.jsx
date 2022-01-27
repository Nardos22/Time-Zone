import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityList from "./pages/CityList";
import WorldMapPage from "./pages/WorldMapPage";
import FavoritePage from "./pages/FavoritePage";
import MissingPage from './pages/MissingPage';
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
function App() {
  return (
      <>
      <TopNavBar></TopNavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/worldmap" element={<WorldMapPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/*" element={<MissingPage />} />
      </Routes> 
      <Footer></Footer>
      </>
  );
}

export default App;

