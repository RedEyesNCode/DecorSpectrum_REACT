import logo from './logo.svg';
import './App.css';
import './style.css';
import React, { useState, useEffect } from "react";
import { getAllBannersDashboard } from './api/apiInterface';
import Slider from 'react-slick';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/navbar';
import { getAllCategory } from './api/apiInterface';
 import { getPopularProducts } from './api/apiInterface';
import Middle from './pages/MiddleHomePage';
import Reactcard from './components/Reactcard';
import Headmean from './pages/headmean';
import Headcard from './pages/headcard';
import Headbottom from './pages/Headbottom';
import Image2slide from './pages/Image2slide';
// import Footer from './pages/footer';
import Footer from './pages/Footer';



function App() {
  const [slides, setBannersStates] = useState (null);


  useEffect(() => {
    const fetchLeadsData = async () => {
      const getAllLeadsResponse = await getAllBannersDashboard();
      console.log("Get All catery navbar -->", getAllLeadsResponse);

      setBannersStates(getAllLeadsResponse);
    };
    fetchLeadsData();
  }, []);

  useEffect(() => {
    const fetchLeadsData = async () => {
      const getAllLeadsResponse = await getAllCategory();
      console.log("Get All banners Response -->", getAllLeadsResponse);

      setBannersStates(getAllLeadsResponse);
    };
    fetchLeadsData();
  }, []);


   useEffect(() => {
     const fetchLeadsData = async () => {
       const getAllLeadsResponse = await getPopularProducts();
       console.log("Get All products Response -->", getAllLeadsResponse);

       setBannersStates(getAllLeadsResponse);
     };
     fetchLeadsData();
   }, []);


  return (
    <header classname="App-header">

      {<Navbar />}
      {slides && (<ImageSlider images={slides.data} />)}
      {<Middle />}
      {slides && (<Reactcard images={slides.data} />)}
      {<Headmean />}
      {<Headcard />}
      {<Headbottom />}
      {<Image2slide />}
      {<Footer/>}
    </header>
  );
}

export default App;
