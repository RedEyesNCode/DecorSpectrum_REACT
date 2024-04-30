import logoImg from "../images/logo-1.png";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import NavLinks from "./NavLinks";

const MaterialNavBar = () => {
  return (
    //Code by Rishi
    <div className="Nav w-full px-4 py-4 flex justify-between items-center bg-[#02221F] text-[#C1CCCF]">
      <div className="Logo">
        <img
          src={logoImg}
          alt="Your Brand Logo"
          className="logo-img h-[80px] w-[120px]"
        />
      </div>
      <div className="NavLinks ">
        <ul className="flex gap-8 font-semibold items-center text-[1.3vw]">
          <li>HOME</li>
          <NavLinks />
          <li>ABOUT US</li>
          <li>BLOGS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className="Icons text-[25px] flex items-center justify-between w-[10%] mr-10">
        <FaBagShopping />
        <IoSearch />
      </div>
    </div>
  );
};

export default MaterialNavBar;