import React from 'react';
import './Icons2.css';
import { FaPhoneVolume } from "react-icons/fa6";

// Import your CSS file
import { MdEmail } from "react-icons/md";
import { IoRefreshOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";



const Icons = ({ mailId, phoneNumber }) => {
    return (
        <div>
            <div className='icon-contain-1'>
            <div className='con-1'>

            <div className="telephone-container">
                <div className="telephone-icon-wrapper">
                    <span className="icon-text with-gap"> < FaPhoneVolume className="telephone-icon" /></span>

                    <div className="telephone-text">
                        <h2 className="heading">Phone</h2>
                        <p className="paragraph">416-871-3118

                            .</p>
                    </div>
                </div>
                <div className="telephone-icon-wrapper">
                    <span className="icon-text with-gap"><MdEmail className="Mail-icon" /></span>

                    <div className="telephone-text">
                        <h2 className="heading">Email
                        </h2>
                        <p className="paragraph">info@decorspectrum.com

                        </p>
                    </div>
                </div>

            </div>
           

            <h1 style={{  fontSize: '40px', fontFamily: '"Rosario", Sans-serif',fontWeight:'600',lineHeight:'1.3em',color:'#2c1a00',marginTop:'-40px;',marginLeft:'-544px' }}>Location</h1>

<div className='con-2'>
            <div className="telephone-container">
                <div className="telephone-icon-wrapper">
                    <span className="icon-text with-gap"><IoRefreshOutline className="IoIosHourglass-icon" /></span>
                    <div className="telephone-text">
                        <h2 className="heading">Open Hours
                        </h2>
                        <p className="paragraph">Monday Closed<br></br>
                            Tuesday- Saturday 11:00 AM<br></br> – 5:00 PM<br></br>
                            Sunday 11:00 AM- 4:00 PM<br></br></p>
                    </div>
                </div>
                <div className="telephone-icon-wrapper">
                    <span className="icon-text with-gap"><FaLocationArrow className="FaAddressBook-icon" /></span>
                    <div className="telephone-text">

                        <div className="telephone-text">
                            <h2 className="heading">Address</h2>
                            <p className="paragraph">463 Bond Street<br></br> E, Oshawa, ON, L1G 1B9

                                .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        








    );
}
export default Icons;
