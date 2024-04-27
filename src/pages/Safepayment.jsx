import React from 'react';
import "./Safepayment.css"
import { GiCityCar } from "react-icons/gi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const SafePayment = () => {
  return (
    <div className="container-fluid">
      <div className="row box4" style={{display:"flex", flexDirection:"row"}}>
        <div className="col-md text-center box4a" data-aos="slide-right" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
            <GiCityCar  style={{ color: 'rgb(2, 34, 31)', fontSize: '80px', justifyItems:"center"}}/>
          <h5 style={{ fontWeight: 'bold', fontSize: '35px' }}>Free Shipping</h5>
          <p>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </div>

        <div className="col-md text-center box4b" data-aos="slide-up" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
          <FaFileInvoiceDollar style={{ fontSize: '80px' }} />
          <h5 style={{ fontWeight: 'bold', fontSize: '25px' }}>Safe Payment</h5>
          <p>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </div>

        <div className="col-md text-center box4c" data-aos="slide-left" style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center' }}>
          <i className="fa-solid fa-phone-volume" style={{ color: 'rgb(2, 34, 31)', fontSize: '50px' }}></i>
          <MdOutlineWifiCalling3  style={{ color: 'rgb(2, 34, 31)', fontSize: '50px' }}/>
          <h5 style={{ fontWeight: 'bold', fontSize: '25px' }}>Online Support</h5>
          <p>Adipiscing sociosqu placerat <br /> platea rutrum ut eros vestibulum posuere dictum
            blandit massa porttitor amet.</p>
        </div>
      </div>
    </div>
  );
};

export default SafePayment;
