// Header.js

import React from 'react';
import './Contactus1.css'; // Import CSS file for styling
import imageSrc from '../images/image1.jpg';
import { FaEnvelope } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import Footer from './Footer';
import MaterialNavBar from '../components/MaterialNavBar';



const Contactus = () => {
  return (
    <div>
      <MaterialNavBar/>
<div>
      
      <div className='header-1'>
       <div className="header">
         <div className="menu">
           {/* Left-side menu items */}
           <ul>
             <a href="#"><li>Home</li></a>
             <a href="#"><li>Contact</li></a>
             <h1>Contact Us</h1>
           </ul>
         </div>
       </div>
     </div>

     <div className="container">
       <h1 style={{ marginTop: '140px', fontSize: '36px', marginLeft: '280px' }}>Hey, Let's Talk!</h1><br /><span style={{ marginTop: '100px', fontSize: '15px', marginLeft: '500px' }}>If you have any questions, simply reach out to us using the form below.</span>



       <div className="row">
         <div className="image-container">
           <img src={imageSrc} alt="Description of the image" style={{ height: '600px', borderRadius: '200px 200px 20px 20px',marginTop:'-20px;' }} />

         </div>
         <div className="form-container">
           <form>
             <div className="form-row">
               <div className="form-group">
                 <label htmlFor="firstName"></label>
                 <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
               </div>
               <div className="form-group">
                 <label htmlFor="lastName"></label>
                 <input type="text" id="lastName" name="lastName" placeholder="Enter your Last name" />
               </div>
             </div>
             <div className="form-group-column">
               <label htmlFor="email"></label>
               <input type="email" id="email" name="email" placeholder="Enter your Email Address" />
             </div>
             <div className="form-group-column">
               <label htmlFor="subjects"></label>
               <input type="text" id="subjects" name="subjects" placeholder="Enter your Subjects" />
             </div>
             <div className="form-group-column">
               <label htmlFor="message"></label>
               <textarea id="message" name="message" style={{ height: '150px' }} placeholder="Enter your Message" ></textarea>
             </div>
             <button type="submit">Submit Form</button>
           </form>
         </div>
       </div>
     </div>
   </div>

   <Footer/>

    </div>
    
  );
}

export default Contactus;
