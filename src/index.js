import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductDetail from "./components/product/ProductDetail";
import ProductByCategory from "./components/product/ProductByCategory";

ReactDOM.render(
  // ADD REACT-ROUTER
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />

      <Route exact path="/product-detail" element={<ProductDetail />} />
      <Route path="/product-category" element={<ProductByCategory />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();