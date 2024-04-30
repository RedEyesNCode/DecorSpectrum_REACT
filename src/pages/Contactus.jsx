// Header.js

import React from 'react';
import './Contactus1.css'; // Import CSS file for styling
import imageSrc from '../images/image-10.jpg';
import { FaEnvelope } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";



const Contactus = () => {
  return (
    <div>

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

      <h1 style={{ textAlign: 'center',fontSize:'15px', marginLeft:'400px'}}>
        Hey, Let's Talk!<br></br>
        If you have any questions,<br></br> simply reach out to us using the form below.</h1>

      <div className="row">
      
        <div className="image-container">
          <img src={imageSrc} alt="Description of the image" />

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
  );
}

export default Contactus;
