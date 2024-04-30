import logo from './logo.svg';
import './App.css';
import './style.css';
import React, { useState, useEffect } from "react";
import { getAllBannersDashboard } from './api/apiInterface';
import Slider from 'react-slick';
import ImageSlider from './components/ImageSlider';
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
import MaterialNavBar from './components/MaterialNavBar';
import ImageGallery from './components/ImageGallery';
import LatestCollection from './pages/latestcollection';
import SafePayment from './pages/Safepayment';
import InnovativeDesign from './pages/InnovativeDesign';
import Cardlamp from './components/Cardlamp';
import Latestblog from './components/product/Latestblog';
import Testimonials from './components/product/Testimonials';
import HandicraftPhotos from './components/HandicraftPhotos';



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


  const [categories, setCategory] = useState (null);


  useEffect(() => {
    const fetchCategoryData = async () => {
      const getAllLeadsResponse = await getAllCategory();
      console.log("Get All category -->", getAllLeadsResponse);

      setCategory(getAllLeadsResponse);
    };
    fetchCategoryData();
  }, []);

   

  return (

    <div>

      {<MaterialNavBar/>}

      {slides && <ImageSlider images={slides.data}/>}
      <Cardlamp />
      <Middle />
      {/* <Image2slide/> */}
      <LatestCollection/>
    <SafePayment />
    <InnovativeDesign/>
      {<Headcard category={categories}/>}
      <Latestblog />
      <Headbottom/>
      <Testimonials />
      <HandicraftPhotos />
      {/* <ImageGallery/> */}
      <Footer/>
    </div>
  );
}

export default App;
