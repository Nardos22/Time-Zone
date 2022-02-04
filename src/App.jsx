import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityList from "./pages/CityList";
import FavoritePage from "./pages/FavoritePage";
import MissingPage from './pages/MissingPage';
import Header from "./components/TopNavBar";
import Footer from "./components/Footer";
function App() {
  return (
      <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/*" element={<MissingPage />} /> 
      </Routes> 
      <Footer></Footer>
      </>
  );
}

export default App;

