import * as React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
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
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
