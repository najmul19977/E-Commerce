import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const AllProduct = ({ item8, HandelAddToCard }) => {
    const { name, price, colors, sizes, image, id } = item8;

    const handalToCartOnClick = () => {
        HandelAddToCard(item8);
        window.alert(`${name} added to cart!`);
        
    }

    return (
        <div>
            <img className='border border-orange-300 p-4' src={image} alt="" />
            <div className='text-xl font-serif font-semibold text-left mt-5'>
                <p>{name}</p>
                <p>${price}</p>
                <button onClick={handalToCartOnClick} className='btn btn-outline-primary border-2 border-orange-300 mt-4 mb-4'>
                    Add To Cart <FaShoppingCart></FaShoppingCart>
                </button>
            </div>
        </div>
    );
};

export default AllProduct;
