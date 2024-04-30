import { FaBagShopping } from "react-icons/fa6";
import logoImg from "../images/logo-1.png";
import { IoSearch } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const MaterialNavBar = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  return (
    <div className="Nav w-full px-4 py-4 flex justify-between items-center bg-[#02221F] text-[#C1CCCF]">
      <div className="Logo">
        <img
          src={logoImg}
          alt="Your Brand Logo"
          className="logo-img h-[80px] w-[120px]"
        />
      </div>
      <div className="NavLinks ">
        <ul className="flex gap-8 font-semibold items-center text-[1.3vw] cursor-pointer">
          <li onClick={() => navigate('/')}>HOME</li>
          <NavLinks />
          <li>ABOUT US</li>
          <li onClick={() => navigate('/blog')}>BLOGS</li> {/* Corrected onClick handler */}
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
