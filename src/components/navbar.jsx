import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import logoImg from "../images/logo-1.png";
import images21 from "../images/logo-1.png";

import "./Navbar.css"; // Import your CSS file for styling
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <img src={images21} alt="Example" className="rounded-image29" />

        <li>
          <a href="#home">HOME</a>
        </li>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            TURKISH {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          <div class="dropdown-content">
            <a href="#">
              LIGHTING {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
            <a href="#">
              CARAMICS {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
            <a href="#">
              THIS N THAT {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
          </div>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            LEATHER ANIMAL DECORE{" "}
            {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          <div class="dropdown-content">
            <a href="#">
              ANIMAL GIGURINS {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
            <a href="#">
              LEATHER BOOKENDS {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
            <a href="#">
              LEATHER FURNITURE ASSENTS{" "}
              {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
            <a href="#">
              LEATHER WALL HEADS{" "}
              {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </a>
          </div>
        </li>
      </ul>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">
          AGATE DECORE {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
        </a>
        <div class="dropdown-content">
          <a href="#">
            AGATE COASTER {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          <a href="#">
            AGATE TABLE CLOCKS {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          <a href="#">
            AGATE TRIVATE {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
        </div>
      </li>
      <ul>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            AGATE DECORE {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </a>
          <div class="dropdown-content">
            <li>
              <a href="#ABOUT US"></a>
            </li>
            <li>
              <a href="#BLOGS"></a>
            </li>
            <li>
              <a href="#CONTACT US"></a>
            </li>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
