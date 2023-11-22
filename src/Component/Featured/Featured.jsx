import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import { Link } from '@mui/material';
import { addToDb } from '../../utils/fackDb';

const Featured = () => {
    const [product, setProduct] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch("featured.json")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching featured data:', error));
    }, []);

    const HandelAddToCard = (id) =>{
        console.log(id);
        addToDb(id)

    }

    return (
        <div>
            <div className='md:grid grid-cols-2 items-center justify-around mt-20 mb-20'>
                <div>
                    <h2 className='text-5xl font-serif text-lime-600 text-left '>Featured Products</h2>
                </div>
                <div>
                    <button className='btn btn-outline-info text-xl font-serif text-lime-600 text-right me-0'>View All Product <FaArrowRight></FaArrowRight></button>
                </div>
            </div>
            <div className='md:grid grid-cols-4 gap-5'>
                {product.map((shirt) => (
                    <FeaturedCard
                        key={shirt.id}
                        shirt={shirt}
                        HandelAddToCard={HandelAddToCard}
                    ></FeaturedCard>
                ))}
            </div>
        </div>
    );
};

export default Featured;
