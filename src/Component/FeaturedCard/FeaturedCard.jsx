import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const FeaturedCard = ({shirt,HandelAddToCard}) => {
    const {id,image,price,quantity,name} = shirt;
    
    return (
        <div>
            <img className='border border-orange-300 p-2' src={image} alt="" />
           <div  className='text-xl font-serif font-semibold text-left mt-5'>
           <p>{name}</p>
            <p>${price}</p>
            <p>Quantity :{quantity}</p>
            <button onClick={() =>HandelAddToCard(id)} className='btn btn-outline-primary border-2 border-orange-300 mt-4 mb-4'>Add To Card <FaShoppingCart></FaShoppingCart></button>
           </div>
            
        </div>
    );
};

export default FeaturedCard;