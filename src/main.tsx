import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./components/ShopContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShopProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ShopProvider>
);
