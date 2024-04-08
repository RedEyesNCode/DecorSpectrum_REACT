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
import MaterialNavBar from './components/MaterialNavBar';



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

  


   

  return (

    <div>
    
      {<MaterialNavBar slidesx={slides}/>}
      <Middle/>
      <Image2slide/>
      <Headmean/>
      <Headcard/>
      <Headbottom/>
      <Footer/>
    </div>
  );
}

export default App;
