import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./FlashSalesCard.css";

const FlashSalesCard = ({ flas }) => {
  const {
    id,
    name,
    originalPrice,
    discountedPrice,
    discountPercentage,
    image,
    expiresAt,
  } = flas;
  return (
    <div>
      
        <div className=" relative  ">
          <img
            className="border border-orange-300 discound zoom object-cover "
            src={image}
            alt=""
          />
          <div className="text-left  font-serif font-semibold  mt-5">
            <p>{name}</p>
            <p>
              Original Price: $ <del>{originalPrice}</del>{" "}
            </p>
            <p>Discounte Price: ${discountedPrice}</p>
            <p>{expiresAt}</p>
            <button className="btn btn-outline-primary border-2 border-orange-300 mt-4 mb-4">
              Add To Card <FaShoppingCart></FaShoppingCart>
            </button>
          </div>
          <div className="bg-orange-300 w-24 text-center p-2 absolute top-0 left-0 discound">
            <p>10% Off</p>
          </div>
        </div>
      
    </div>
  );
};

export default FlashSalesCard;
