import * as React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
