import React from "react";
import img1 from "../../assets/image/collection-item1.jpg";
import img2 from "../../assets/image/collection-item2.jpg";
import img3 from "../../assets/image/collection-item3.jpg";
import { FaArrowRight } from "react-icons/fa";

const MainPart = () => {
  const div1Style = {
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", // Set a specific height for the div
  };

  const div2Style = {
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", // Set a specific height for the div
  };

  const div3Style = {
    backgroundImage: `url(${img3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", // Set a specific height for the div
  };

  return (
    <div className="md:grid grid-cols-2 gap-5 min-h-screen mt-20">
      <div className="md:grid grid-cols-2 items-center text-left" style={div1Style}>
        <div>
           
        </div>
        <div className=" ml-4">
            <p className="text-left text-xl font-semibold  mt-10 me-4 text-gray-400">CASUAL COLLECTION</p>
          <h1 className="text-5xl font-serif font-bold text-left">Street Wear.</h1>
          <p className="text-left text-xl font-semibold mt-10 me-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            laudantium neque rem beatae, ratione consequatur minus sed aliquam
            magni sint mollitia dolorem enim, perspiciatis sit rerum officia
            velit, dolore soluta!
          </p>
          <button className="btn btn-outline-info  border-orange-300 mt-5 mb-4 ">Shop Collection <FaArrowRight></FaArrowRight></button>
        </div>
      </div>
      <div>
      <div style={div2Style} className="flex items-center mb-4">
        <div className="mx-auto ml-4">
          <p className="text-left text-xl font-semibold mt-10 me-4 text-gray-400">BASIC COLLECTION <span className="block text-5xl font-serif font-bold text-left text-black">Basic Shoes.</span>
          <span> <button className="btn btn-outline-info border-orange-300 mt-5 mb-4">Shop Collection <FaArrowRight></FaArrowRight></button></span>
          </p>
          
         
        </div>
      </div> 
        <div style={div3Style}  className="flex items-center">
        <div className="mx-auto ml-4 ">
          <p className="text-left text-xl font-semibold mt-10 me-4 text-gray-400">BEST SELLING PRODUCT <span className="block text-5xl font-serif font-bold text-left text-black">Woolen Hat.</span>
          <span> <button className="btn btn-outline-info border-orange-300 mt-5 mb-4">Shop Collection <FaArrowRight></FaArrowRight></button></span>
          </p>
          
         
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default MainPart;
