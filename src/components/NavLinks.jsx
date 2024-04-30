import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { getAllCategory, getAllSubcategories } from "../api/apiInterface";
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

const NavLinks = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const [isHoveredOnListItem, setisHoveredOnListItem] = useState(false);
  const [listItemIndexToBeChanged, setlistItemIndexToBeChanged] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dropDownsData, setDropDownsData] = useState([
  ]);

  const handleCategoryHover = (index) => {
    setSelectedCategory(index);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  const callHandleCategoryLeave = () => {
    setTimeout(handleCategoryLeave, 3000);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const handleSubCategoryNavigate = (subCategory) =>{
    const sessionCategory = { categoryId: '10', categoryName: subCategory };
    LocalStorageManager.setItem(
      LOCAL_STORAGE_KEY.CATEGORY_SESSION,
      sessionCategory
    );

    navigate("/product-category/" + '10', {
      state: { category_id: '10', category_name: subCategory },
    });

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subCategoriesResponse, categoriesResponse] = await Promise.all([
          getAllSubcategories(),
          getAllCategory()
        ]);
  
        console.log("Get All category response -->", categoriesResponse);
        console.log("Get cat data  -->", categoriesResponse.data);
        console.log("Get All sub category response -->", subCategoriesResponse);
  
        if (categoriesResponse.data && subCategoriesResponse.data) {
          const catDataArray = [...categoriesResponse.data];
          const subCatDataArray = [...subCategoriesResponse.data];
          
          let subCatIndex = 0; // Initialize subcategory index
          
          catDataArray.forEach((catItem, catIndex) => {
            const obj = { ...catItem, subCategory: [] };
            
            for (let i = subCatIndex; i < subCatIndex + 3 && i < subCatDataArray.length; i++) {
              obj.subCategory.push(subCatDataArray[i].name);
            }
            
            subCatIndex += 3; // Increment subcategory index by 3 for next iteration
            
            catDataArray[catIndex] = obj; // Update catDataArray with obj
          });
  
          // Assuming dropDownsData is defined elsewhere in your component
          const updatedData = [ catDataArray];
          console.log("updated data", updatedData);
          setDropDownsData(catDataArray);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="flex gap-8">
      {dropDownsData.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleCategoryHover(index)}
          // onMouseLeave={callHandleCategoryLeave}
          onClick={() => handleCategoryClick(index)}
        >
          <li className="flex gap-2 items-center uppercase cursor-pointer">
            {item.name} <FaCaretDown />
          </li>
          <ul
            onMouseLeave={callHandleCategoryLeave}
              className={`absolute top-[150%] left-0 bg-[#02221F] text-[#C1CCCF] py-2  border border-gray-800 rounded-[5px] w-fit shadow-lg duration-[.5s] transition-height overflow-hidden z-[999] ${
                selectedCategory === index
                  ? "opacity-100"
                  : "opacity-0 h-0 pointer-events-none"
              }`}
            style={{ maxHeight: selectedCategory === index ? "fit-content" : "0" }}
          >
            {item.subCategory.map((subItem, subIndex) => (
              <li
              onClick={() => handleSubCategoryNavigate(subItem)}  
              onMouseEnter={() => {
                  setlistItemIndexToBeChanged(subIndex);
                  setisHoveredOnListItem(true);
                }}
                onMouseLeave={() => setisHoveredOnListItem(false)}
                key={subIndex}
                
                className={`uppercase leading-10 font-bold px-3 text-nowrap ${
                  listItemIndexToBeChanged === subIndex && isHoveredOnListItem
                    ? "bg-white text-[#02221F]"
                    : ""
                }`}
                style={{ wordSpacing: "-0.1em" }}
              >
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
