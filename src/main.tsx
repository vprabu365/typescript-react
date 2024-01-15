import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ShopContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ShopContextProvider>
);
