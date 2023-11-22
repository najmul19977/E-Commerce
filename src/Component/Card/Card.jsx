import React, { useContext } from 'react';
import { deleteShoppingCard, getStoredCart, removeFromDb } from '../../utils/fackDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../Home/Home';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    //const { cartArray, products } = useLoaderData();
    const [cart,setCart] = useContext(CartContext)

    let total = 0;
    if (cart.length > 0) {
        for (const product of cart) {
            total = total + product.price * product.quantity;
            total.toFixed(2);
        }
    }
    //remove item from shopping cart

    const handleRemoveItem = id =>{
        const remaing = cart.filter(product =>product.id !== id)
        setCart(remaing);
        removeFromDb(id);
    }

    

    //place order
    const orderHandler = () =>{
        if(cart.length > 0){
            setCart([])
            deleteShoppingCard()
            return alert('order done')
        }
        return alert('cart empty')
    }

    // clear cart
    const dleteCartHandler = () =>{
        if(cart.length > 0){
            setCart([])
            deleteShoppingCard()
            return alert('All Cart Delet')
        }

    }
    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            <div className='flex flex-col max-w-3xl'>
                <h2 className='text-gray-400 text-3xl font-bold'>
                    {cart.length ? 'Review Cart Item' : 'Cart Is Empty'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-400'>
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product}
                        handleRemoveItem={handleRemoveItem} />
                    ))}
                </ul>
                <p className='text-2xl font-bold'>Total Amount = ${total}</p>
            </div>
            <div className='flex justify-end space-x-4 mt-5 mb-5'>
                {cart.length >0 ? (<button onClick={dleteCartHandler} className='btn btn-outline-light '>Clear Cart</button>):(<Link to='/'><button className='btn btn-outline-light '>Back To Shop</button></Link>)}
                <button onClick={orderHandler} className='btn btn-secondary '>Place Order</button>
            </div>
        </div>
    );
};

export default Card;
