import React from "react";
import logoImg from "../images/footer logo.png";
import { FaArrowRight, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const MainFooter = () => {
  return (
    <div className="h-[72vh] w-full">
      <div className="Upper h-[82%] bg-[#02221F] w-full flex border-b-2">
        <div className="logo  h-full min-w-[40%] text-[#cfd8dcee]  px-10 pt-16">
          <div className="sign h-[35%]">
            <img  src={logoImg} alt="" />
          </div>
          <div className="contact h-[30%] mb-1">
            <button
              className="rounded-tl-full rounded-br-full rounded-tr-[2vw] hover:shadow-none hover:border-[#021C09]  hover:ring-0 shadow-lg ring ring-[#cfd8dcee]/50 border border-solid border-yellow-400
 bg-[#C1CCCF] cursor-pointer px-7 py-5 font-bold text-[17px] hover:bg-[#C1CCCF] text-[#02221F]"
            >
              Contact Us   
            </button>
          </div>
          <div className="detail text-xl">
            <p className="flex items-center mb-2"><IoMail />&nbsp;  support@domain.tld</p>
            <p className="flex items-center"><FaPhoneAlt /> &nbsp; +6221.2002.2012</p>
          </div>
        </div>
        <div className="links    h-full min-w-[60%] text-[#cfd8dcee] flex pt-16 justify-between px-10">
            <div className="p-5">
                <h1 className="text-3xl mb-10">Explore Us</h1>
                <p className="flex items-center text-xl"><FaArrowRight />Jakarta</p>
                <p className="flex items-center text-xl"><FaArrowRight />Surabaya</p>
                <p className="flex items-center text-xl"><FaArrowRight />Medan</p>
                <p className="flex items-center text-xl"><FaArrowRight />Palangkaraya</p>
            </div>
            <div className="p-5">
                <h1 className="text-3xl mb-10">Support</h1>
                <p className="flex items-center text-xl"><FaArrowRight />Faculty</p>
                <p className="flex items-center text-xl"><FaArrowRight />Academics</p>
                <p className="flex items-center text-xl"><FaArrowRight />Admissions + Aid</p>
                <p className="flex items-center text-xl"><FaArrowRight />Campus Life</p>
                <p className="flex items-center text-xl"><FaArrowRight />Alumni</p>
            </div>
            <div className="p-5">
                <h1 className="text-3xl mb-10">Get in Touch</h1>
                <p className="flex items-center text-xl"><FaArrowRight />About us</p>
                <p className="flex items-center text-xl"><FaArrowRight />Leadership</p>
                <p className="flex items-center text-xl"><FaArrowRight />News & Article</p>
                <p className="flex items-center text-xl"><FaArrowRight />Legal Notice</p>
            </div>
        </div>
      </div>
      <div className="Bottom h-[18%] bg-[#02221F] text-[#cfd8dcee] flex justify-between px-5 py-4 items-center">
        <div className="left">
          <p className="mb-3">© Ali Azam |</p>
          <p>
            Term of Policy | &nbsp; Cookie Policy | &nbsp; Contact us | &nbsp;
            Privacy Policy
          </p>
        </div>
        <div className="right flex text-5xl">
          <FaFacebookSquare />
          <FaSquareTwitter />
          <FaSquareInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
