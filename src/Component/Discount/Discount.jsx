import React from 'react';

const Discount = () => {
    return (
        <div>
            <h2 className='text-5xl font-sans font-bold mt-20'>Get 25% Off Discount Coupons</h2>
            <p className='text-xl font-serif font-semibold text-gray-400 md:ml-20 md:mr-20 mt-5 mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni porro numquam minima nihil debitis ipsa soluta vel veritatis repellendus quidem hic corporis voluptates, minus libero, aliquid error impedit velit esse.</p>
           <div className='block'>
           <input type="text" placeholder="Enter Your Email Address Here" className="input  border-orange-300 w-full max-w-xs" />   
            <button className='btn btn-btn-outline-primary border-orange-300 ml-4 '>Subscribe Now</button>
           </div>
            
        </div>
    );
};

export default Discount;