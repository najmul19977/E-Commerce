const addToDb = (id) => {
    let shoppingCart = {};

    // Get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');  // Fixed the typo in the key
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // Add to quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// Get storage data from cart

const getStoredCart = () => {
    let shoppingCart = {};

    // Get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');  // Fixed the typo in the key
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

// Remove a specific element from local storage

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};

// clear all data from local stot
const deleteShoppingCard = () => localStorage.removeItem('shopping-cart')

export { addToDb, getStoredCart, removeFromDb,deleteShoppingCard };
