import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const TshirtCard = ({item2,HandelAddToCard}) => {
    const{id,name,price,colors,sizes,material,image} = item2;
    return (
        <div>
            <img  className= 'border border-orange-300 p-4' src={image} alt="" />
            <div className='text-xl font-serif font-semibold text-left mt-5'>
                <p>{name}</p>
                <p>All Sizes Available</p>
                <p>Color  {colors[2]}</p>
                <p>${price}</p>
                <button onClick={()=>HandelAddToCard(id)} className='btn btn-outline-primary border-2 border-orange-300 mt-4 mb-4'>Add To Card <FaShoppingCart></FaShoppingCart></button>
            </div>
            
        </div>
    );
};

export default TshirtCard;