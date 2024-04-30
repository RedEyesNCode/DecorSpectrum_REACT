import React from "react";
import img1 from "./blog card 1.webp";
import { motion } from "framer-motion";
import { TbMathGreater } from "react-icons/tb";
import MaterialNavBar from "../components/MaterialNavBar";
import Footer from "../pages/Footer"

const Blog = () => {
  return (
    <div className="">
      <MaterialNavBar/>
      <div className="mb-[8vw] h-[270px] bg-gradient-to-tr from-[#051937] via-[#19495e,#507b7d,#93ada0]  to-[#dbe0d0] py-[80px] px-[25px]">
        <p className=" flex items-center gap-3">
          {" "}
          <span className="text-[#cfd8dcee]">Home</span> <TbMathGreater /> Blog
        </p>
        <h1 className="text-[#cfd8dcee] text-[3.2vw] font-['Rosario']">Blogs</h1>
      </div>
      <div className=" px-[4vw] flex flex-wrap gap-[8vw] mb-[20px]">
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
      </div>
      <div className="mb-[5vw] px-[4vw] flex flex-wrap gap-[8vw] ">
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
        <motion.div
          transition={{ duration: 0.8 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between items-center  p-8 rounded-[50px] h-[400px] bg-[#02221F] w-[380px] text-[#7190A8]"
        >
          <div className="transform hover:scale-100 scale-95 transition duration-500 ease-in-out hover:-rotate-12  h-[67%]">
            <img className="rounded-[40px]" src={img1} alt="image" />
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
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
