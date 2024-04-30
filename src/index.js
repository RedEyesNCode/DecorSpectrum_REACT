import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductDetail from "./components/product/ProductDetail";
import ProductByCategory from "./components/product/ProductByCategory";
import AboutUs from "./components/AboutUs";
import CounterComponent from "./components/CounterComponent";
import CartCheckout from "./components/CartCheckout";
import RishiCheckout from "./RishiCheckoutPage/RishiCheckout";
import Blog from "./Blog/Blog";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />

      <Route exact path="/product-detail" element={<ProductDetail />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/about" element={<AboutUs />} />

      <Route exact path="/checkout" element={<CartCheckout/>}></Route>
      <Route exact path="/chpage" element={<RishiCheckout/>}></Route>
      <Route exact path="/blog" element={<Blog/>}></Route>

      <Route path="/product-category/:categoryId" element={<ProductByCategory />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();