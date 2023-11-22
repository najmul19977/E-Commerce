import React from 'react';
import img from '../../assets/image/model.jpg';
import { FaArrowRight } from "react-icons/fa";

const Model = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        height: '100vh', // You can adjust the height as needed
        // Add any other styles you need for the background container
    };

    return (
        <div className='mt-20 grid md:grid-cols-2 md:items-center text-left ' style={backgroundImageStyle}>
            <div>

            </div>
            <div className='ml-5'>
                <p className='text-gray-400 text-xl'>DENIM COLLECTION</p>
                <h1 className='text-7xl text-black font-bold mt-5'>The Casual Selection.</h1>
                <p className='text-gray-400 text-xl mt-5'>Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.</p>
                <div>
                    <button className='btn btn-outline-info text-xl font-serif text-lime-600 text-right me-0 mt-5'>View All Product <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Model;
