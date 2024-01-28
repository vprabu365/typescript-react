import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Hero/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
