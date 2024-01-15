import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import Product from "./components/Product/Product";
import Home from "./components/Hero/Home";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
