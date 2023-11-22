import React from "react";
import FlashSalesCard from "../FlashSalesCard/FlashSalesCard";

const FlashSales = () => {
  const flash = [
    {
      id: "FS001",
      name: "Smartphone X",
      description: "Powerful smartphone with high-end features.",
      originalPrice: 799.99,
      discountedPrice: 599.99,
      discountPercentage: 25,
      image: "https://i.ibb.co/HF6CLxm/phone.webp",
      expiresAt: "2023-12-31T23:59:59",
    },
    {
      id: "FS002",
      name: "Ultra HD Smart TV",
      description: "Large-screen smart TV with crystal-clear resolution.",
      originalPrice: 1299.99,
      discountedPrice: 999.99,
      discountPercentage: 23,
      image: "https://i.ibb.co/VQGVQNJ/tv.webp",
      expiresAt: "2023-12-31T23:59:59",
    },
    {
      id: "FS003",
      name: "Wireless Noise-Canceling Headphones",
      description:
        "Premium headphones with advanced noise-canceling technology.",
      originalPrice: 249.99,
      discountedPrice: 179.99,
      discountPercentage: 28,
      image: "https://i.ibb.co/FgbBVsX/head-phone.jpg",
      expiresAt: "2023-12-31T23:59:59",
    },
    {
      id: "FS004",
      name: "Digital Camera Bundle",
      description: "Professional-grade digital camera with accessory bundle.",
      originalPrice: 899.99,
      discountedPrice: 749.99,
      discountPercentage: 17,
      image: "https://i.ibb.co/GChxvz3/cemera.webp",
      expiresAt: "2023-12-31T23:59:59",
    },
  ];
  return (
    <div>
      <h2 className="text-5xl text-lime-600 font-serif mt-20 text-left mb-10">
        Flash Sales
      </h2>
      <div className="md:grid grid-cols-4 gap-5">
        {flash.map((flas) => (
          <FlashSalesCard key={flas.id} flas={flas}></FlashSalesCard>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
