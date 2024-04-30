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
import CheckoutForm from "./components/CheckoutForm";
import BillingCheckoutForm from "./RishiCheckoutPage/BillingCheckoutForm";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />

      <Route exact path="/product-detail" element={<ProductDetail />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/about" element={<AboutUs />} />

      <Route exact path="/checkout" element={<CartCheckout/>}></Route>
      <Route exact path="/square-checkout" element={<BillingCheckoutForm/>}></Route>


      <Route path="/product-category/:categoryId" element={<ProductByCategory />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();