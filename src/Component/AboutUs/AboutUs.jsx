import React from "react";
import img from "../../assets/image/hero-image1.jpg";
import img2 from '../../assets/image/single-image1.jpg';
import { Link } from "react-router-dom";

const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <div style={backgroundStyle}>
        <h2 className="text-9xl font-bold text-center mx-auto">About Page</h2>
      </div>
      <div className="md:grid grid-cols-2 gap-4 items-center">
        <div>
            <img className="mt-5 mb-5" src={img2} alt="" />

        </div>
        <div className="text-left ml-5">
            <h2 className="text-5xl font-bold font-serif text-left text-black">How Was Ultras Store Started?</h2>
            <p className="text-left font-bold text-xl text-gray-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum quae id provident consectetur similique ipsa libero tempora minus aut molestias, ea aliquid voluptas rerum odio doloremque ipsum amet et?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere nulla maxime beatae atque? Odit qui accusamus accusantium ut nulla quaerat voluptatem vero, laudantium quia et laboriosam repellat saepe atque!
            </p>
           <Link className="mt-5" to='/'> <button className="btn btn-secondary w-1/3 mt-5">Shop Our Store</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
