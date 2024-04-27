import React, { useState, useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import "./MaterialNavBar.css";
import logoImg from "../images/logo-1.png";
import { getAllCategory, getAllSubcategories } from "../api/apiInterface";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import { IoSearchOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const MaterialNavBar = ({ slidesx }) => {
  const [showlogin, setshowlogin] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory

  const navigateAboutUs = () => {
    navigate("/about-us");
  };
  const navigateHome = () => {
    navigate("/");
  };

  const [mainCategory, setMainCategory] = useState({
    data: [
      { name: "Turkish Decor" },
      { name: "Leather Animal Decor" },
      { name: "Agate Decor" },
    ],
  });

  const [mainSubCategory, setMainSubCategory] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategoriesResponse = await getAllSubcategories();
      console.log("Get All sub category response -->", allCategoriesResponse);

      setMainSubCategory(allCategoriesResponse);
    };
    fetchAllCategories();
  }, []);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const allCategoriesResponse = await getAllCategory();
      console.log("Get All category response -->", allCategoriesResponse);

      setMainCategory(allCategoriesResponse);
    };
    fetchAllCategories();
  }, []);

  const handleClick = (event, categoryName) => {
    if (categoryName == "Turkish Decor") {
      const sessionCategory = {
        categoryId: "22",
        categoryName: "Turkish Decor",
      };
      LocalStorageManager.setItem(
        LOCAL_STORAGE_KEY.CATEGORY_SESSION,
        sessionCategory
      );
      navigate("/product-category/" + "1", {
        state: { category_id: "1", category_name: "Ceramics" },
      });
    } else if (categoryName == "Leather Animal Decor") {
      const sessionCategory = {
        categoryId: "2",
        categoryName: "Leather Animal Decor",
      };
      LocalStorageManager.setItem(
        LOCAL_STORAGE_KEY.CATEGORY_SESSION,
        sessionCategory
      );
      navigate("/product-category/" + "2", {
        state: { category_id: "2", category_name: "Leather Animal Decor" },
      });
    } else if (categoryName == "Agate Decor") {
      const sessionCategory = { categoryId: "3", categoryName: "Agate Decor" };
      LocalStorageManager.setItem(
        LOCAL_STORAGE_KEY.CATEGORY_SESSION,
        sessionCategory
      );
      navigate("/product-category/" + "3", {
        state: { category_id: "3", category_name: "Agate Decor" },
      });
    }
    setshowlogin(!showlogin);
  };
  return (
    //Rishi
    <div
      className="main"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "100vw",
        borderBottom: "1px solid #e0e0e0",
        padding: "5px 20px",
        backgroundColor: "#02221F",
        color: "#C1CCCF",
      }}
    >
      <div className="logo" style={{ minWidth: "20%" }}>
        <img
          src={logoImg}
          alt="Your Brand Logo"
          style={{ height: "80px", width: "120px" }}
        />
      </div>
      <div
        className="links"
        style={{ minWidth: "62%", display: "flex", gap: "20px" }}
      >
        <Button
          onClick={navigateHome}
          sx={{
            fontSize: "15px",
            color: "#C1CCCF",
          }}
        >
          Home
        </Button>
        {/* //for first category */}
        {mainCategory &&
          mainCategory.data.map((category, index) => (
            <div style={{ position: "relative" }} key={index}>
              <Button
                aria-label={category.name}
                onClick={(e) => handleClick(e, category.name)}
                sx={{
                  fontSize: "15px",
                  color: "#C1CCCF",
                }}
              >
                {category.name}&nbsp;
                <IoIosArrowDown />
              </Button>
              <div
                style={
                  showlogin
                    ? {
                        display: "initial",
                        position: "absolute",
                        top: "50%",
                        left: "0%",
                      }
                    : { display: "none" }
                }
                className="Loginbuttons bg-#C1CCCF mt-5"
              >
                <div
                  className="text-[#00A5EC] h-[10vw] w-[12vw] rounded text-[1.15vw] "
                  style={{
                    backgroundColor: "#02221F",
                    color: "white",
                    transition: "background-color 0.3s",
                    padding: "10px",
                  }}
                >
                  {mainSubCategory &&
                    mainSubCategory.data.map((subCategory, index) => {
                      if (index < 3) {
                        return (
                          <h1
                            key={index}
                            style={{
                              borderBottom: "1px solid #C1CCCF",
                              marginTop: "8px",
                            }}
                          >
                            {subCategory.name}
                          </h1>
                        );
                      }
                      return null; // Skip rendering if index is not a multiple of 3
                    })}
                </div>
              </div>
            </div>
          ))}
        {/* //for second category  */}

        <Button
          aria-label="about us"
          onClick={navigateAboutUs}
          className="capitalize"
          sx={{
            fontSize: "15px",
            color: "#C1CCCF",
          }}
        >
          About Us
        </Button>
        <Button
          aria-label="blogs"
          sx={{
            fontSize: "15px",
            color: "#C1CCCF",
          }}
        >
          Blogs
        </Button>
        <Button
          aria-label="contact us"
          sx={{
            fontSize: "15px",
            color: "#C1CCCF",
          }}
        >
          Contact Us
        </Button>
      </div>
      <div
        className="icons"
        style={{
          marginLeft: "18px",
          display: "flex",
          gap: "10px",
        }}
      >
        <Button aria-label="bag" sx={{ fontSize: "25px", color: "black" }}>
          <SlBag style={{ color: "#C1CCCF" }} />
        </Button>
        <IconButton
          aria-label="search"
          sx={{ fontSize: "25px", color: "black" }}
        >
          <IoSearchOutline style={{ color: "#C1CCCF" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default MaterialNavBar;
