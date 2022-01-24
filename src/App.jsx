import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cities from "./pages/Cities";
import WorldMapPage from "./pages/WorldMapPage";
import FavoritePage from "./pages/FavoritePage";
import MissingPage from './pages/MissingPage';
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
      <>
      <TopNavBar></TopNavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/worldmap" element={<WorldMapPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/*" element={<MissingPage />} />
      </Routes> 
      </>
  );
}

export default App;

