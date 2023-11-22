import React from 'react';
import Header from '../Header/Header';
import Featured from '../Featured/Featured';
import MainPart from '../MainPart/MainPart';
import Discount from '../Discount/Discount';
import BestSealling from '../BestSealling/BestSealling';
import Testimonial from '../Testimonial/Testimonial';
import FlashSales from '../FlashSales/FlashSales';
import Model from '../Model/Model';

const First = () => {
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
            <MainPart></MainPart>
            <Discount></Discount>
            <BestSealling></BestSealling>
            <Testimonial></Testimonial>
            <FlashSales></FlashSales>
            <Model></Model>
        </div>
    );
};

export default First;