import React, { createContext, useState } from "react";
import NabSection from "../NabSection/NabSection";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Home = () => {
  const { cartArray, products } = useLoaderData();
  const [cart,setCart] = useState(cartArray)

  return (
    <ProductContext.Provider value={products}>
   <CartContext.Provider value={[cart,setCart]}>
   <NabSection></NabSection>
      <Outlet></Outlet>

      <Footer></Footer>
   </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Home;
