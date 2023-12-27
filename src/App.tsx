import * as React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Services from "./components/Services/Services";
import Products from "./components/Products";
import Home from "./components/Hero/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
