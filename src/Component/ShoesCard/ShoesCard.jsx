import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
const ShoesCard = ({item1,HandelAddToCard}) => {
    const{image,id,model,price,color ,brand   } = item1;
    return (
        <div >
            <img className= 'border border-orange-300 p-4' src={image} alt="" />
            <div  className='text-xl font-serif font-semibold text-left mt-5'>
           <p>{brand}</p>
            <p>${price}</p>
            <p>Quantity :{}</p>
            <button onClick={()=>HandelAddToCard(id)} className='btn btn-outline-primary border-2 border-orange-300 mt-4 mb-4'>Add To Card <FaShoppingCart></FaShoppingCart></button>
           </div>
            
        </div>
    );
};

export default ShoesCard;