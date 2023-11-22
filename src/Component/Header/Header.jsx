import React from "react";
import img1 from '../../assets/image/img1.jpg';
import img2 from '../../assets/image/img2.jpg';
import img3 from '../../assets/image/img3.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="carousel w-full">
      <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }} id="slide1" className="carousel-item relative w-full min-h-screen text-center">
        <div className="flex items-center mx-auto">
          <p className="mx-4  md:mx-40 mt-5 text-xl font-serif text-purple-300 "> <span className="block text-5xl font-serif text-center ">Summer Collection</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim, deserunt odio unde sapiente reiciendis, non illo provident qui voluptate inventore quidem magni nobis, perspiciatis quibusdam optio commodi explicabo in? <span className="block">  <button className="btn btn-info mt-5"> Shop Now</button></span>  </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle md:invisible">❮</a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }} id="slide2" className="carousel-item relative w-full min-h-screen text-center">
      <div className="flex items-center mx-auto">
          <p className="mx-4  md:mx-40 mt-5 text-xl font-serif text-primary "> <span className="block text-5xl font-serif text-center ">Winter Collection</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim, deserunt odio unde sapiente reiciendis, non illo provident qui voluptate inventore quidem magni nobis, perspiciatis quibusdam optio commodi explicabo in? <span className="block">  <button className="btn btn-info mt-5"> Shop Now</button></span>  </p>
          
        </div>
       
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }} id="slide3" className="carousel-item relative w-full min-h-screen text-center">
      <div className="flex items-center mx-auto">
          <p className="mx-4  md:mx-40 mt-5 text-xl font-serif text-blue-50 "> <span className="block text-5xl font-serif text-center ">Casual Collection</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim, deserunt odio unde sapiente reiciendis, non illo provident qui voluptate inventore quidem magni nobis, perspiciatis quibusdam optio commodi explicabo in? <span className="block">  <button className="btn btn-info mt-5"> Shop Now</button></span>   </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
