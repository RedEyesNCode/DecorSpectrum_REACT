import React from "react";
import img1 from "./blog card 1.webp";

const Blog = () => {
  return (
    <div className="bg-gray-100 p-[10vw] ">
      <div className="flex flex-col justify-between items-center  p-8 rounded-[60px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]">
       <div className="hover:-rotate-12">
       <img className=" rounded-[40px]" src={img1} alt="image" />
       </div>
        <div className="w-[80%] text-[#C1CCCF] font-bold align-middle h-[20%]">
          <p className="">
            Chandelier Decor: Choose the Best Chandelier for your Home
          </p>
        </div>
        <div className="flex justify-center h-[13%]">
          <button
            className="hover:shadow-none hover:border-none  hover:ring-0 shadow-lg ring ring-[#cfd8dcee]/50 border border-solid border-yellow-400
 bg-[#cfd8dcee] cursor-pointer px-4 py-2 text-[#cfd8dcee]  font-bold text-[17px] rounded-lg hover:bg-[#C1CCCF] hover:text-[#02221F]"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
