import React from "react";

const CartItem = ({ product,handleRemoveItem }) => {
  const { id, image, price, name,quantity } = product;
  return (
    <div className="flex items-center p-5 ">
      <div>
        <img className="w-24 h-24 p-4" src={image} alt="" />
      </div>
      <div className="text-left ml-0 ">
        <p className="text-left">{name}</p>
        <p>Quantity {quantity}</p>
        <p>${price}</p>
        <p>Total: ${price * quantity}</p>
        
      </div>
      <div className="flex justify-end">
        <button className="btn btn-outline-info border border-red-300 " onClick={() => handleRemoveItem(id)}> Remove </button>
      </div>
    </div>
  );
};

export default CartItem;
