import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ShoesCard from "../ShoesCard/ShoesCard";
import TshirtCard from "../TshirtCard/TshirtCard";
import PantCard from "../PantCard/PantCard";
import HoddiCard from "../HoddiCard/HoddiCard";
import OuterCard from "../OuterCard/OuterCard";
import JacketCard from "../JacketCard/JacketCARD.JSX";
import AccosoryCard from "../AccosoryCard/AccosoryCard";
import AllProduct from "../AllProduct/AllProduct";

import { addToDb } from "../../utils/fackDb";
import { CartContext, ProductContext } from "../Home/Home";
import SearchBar from "../SearchBar/SearchBar";

const BestSealling = () => {
  const [all, setAll] = useState([]);
  const [accosory, setAccosory] = useState([]);
  const [jacket, setJacket] = useState([]);
  const [outer, setOuter] = useState([]);
  const [hoddi, setHoddi] = useState([]);
  const [pant, setPant] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [tshirt, setTshirt] = useState([]);
  const [value, setValue] = useState("1");
  
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("all.json")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  useEffect(() => {
    fetch("shoes.json")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  useEffect(() => {
    fetch("t-shirt.json")
      .then((res) => res.json())
      .then((data) => setTshirt(data));
  }, []);

  useEffect(() => {
    fetch("pants.json")
      .then((res) => res.json())
      .then((data) => setPant(data));
  }, []);

  useEffect(() => {
    fetch("hoddie.json")
      .then((res) => res.json())
      .then((data) => setHoddi(data));
  }, []);

  useEffect(() => {
    fetch("outer.json")
      .then((res) => res.json())
      .then((data) => setOuter(data));
  }, []);

  useEffect(() => {
    fetch("jackets.json")
      .then((res) => res.json())
      .then((data) => setJacket(data));
  }, []);

  useEffect(() => {
    fetch("accessories.json")
      .then((res) => res.json())
      .then((data) => setAccosory(data));
  }, []);


 const products = useContext(ProductContext);
 const [cart,setCart] = useContext(CartContext)
 console.log(products);
  const HandelAddToCard = product =>{
    //console.log(id)
      let newCart = []
      const exists = cart.find(existingProduct => existingProduct.id=== product.id)
       if(!exists){
        product.quantity = 1
        newCart = [...cart,product]
       }
       else{
        const rest = cart.filter(existingProduct =>existingProduct.id !== product.id)
        exists.quentity = exists.quantity + 1
        newCart = [...rest,exists]

       }
       setCart(newCart)
      addToDb(product.id)
  }

  return (
    <div>
      <div className="md:grid grid-cols-2 items-center ">
        <div>
          <h2 className="text-5xl text-lime-600 font-serif mt-20 text-left mb-10">
            Best Selling Products
          </h2>
        </div>
        <div className="md:ml-40 mb-5 mt-5">
          <SearchBar></SearchBar>
         {/*  <div className="relative flex items-center mt-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div> */}
        </div>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All" value="1" />
              <Tab label="Shoes" value="2" />
              <Tab label="Tshirts" value="3" />
              <Tab label="Pants" value="4" />
              <Tab label="Hoodie" value="5" />
              <Tab label="Outer" value="6" />
              <Tab label="Jackets" value="7" />
              <Tab label="Accessories" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="md:grid grid-cols-4 gap-5">
              {all.map((item8) => (
                <AllProduct key={item8.id} item8={item8} HandelAddToCard={HandelAddToCard}></AllProduct>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="md:grid grid-cols-4 gap-5">
              {shoes.map((item1) => (
                <ShoesCard key={item1.id} item1={item1} HandelAddToCard={HandelAddToCard}></ShoesCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="md:grid grid-cols-4 gap-5">
              {tshirt.map((item2) => (
                <TshirtCard key={item2.id} item2={item2} HandelAddToCard={HandelAddToCard}></TshirtCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="4">
            <div className="md:grid grid-cols-4 gap-5">
              {pant.map((item3) => (
                <PantCard key={item3.id} item3={item3} HandelAddToCard={HandelAddToCard}></PantCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="5">
            <div className="md:grid grid-cols-4 gap-5">
              {hoddi.map((item4) => (
                <HoddiCard key={item4.id} item4={item4} HandelAddToCard={HandelAddToCard}></HoddiCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="6">
            <div className="md:grid grid-cols-4 gap-5">
              {outer.map((item5) => (
                <OuterCard key={item5.id} item5={item5} HandelAddToCard={HandelAddToCard}></OuterCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="7">
            <div className="md:grid grid-cols-4 gap-5">
              {jacket.map((item6) => (
                <JacketCard key={item6.id} item6={item6} HandelAddToCard={HandelAddToCard}></JacketCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="8">
            <div className="md:grid grid-cols-4 gap-5">
              {accosory.map((item7) => (
                <AccosoryCard key={item7.id} item7={item7} HandelAddToCard={HandelAddToCard}></AccosoryCard>
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default BestSealling;
