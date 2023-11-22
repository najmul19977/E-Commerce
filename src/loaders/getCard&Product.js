import { getStoredCart } from "../utils/fackDb"




export const productsAndCartData =async () =>{
    const productsData = await fetch('all.json')
    const products = await productsData.json()
    const savedCart = getStoredCart()
    let cartArray = []

    for(const id in savedCart){
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct){
            foundProduct.quantity = savedCart[id]
            cartArray.push(foundProduct)
        }
    }
    return {cartArray,products}

}

/* import { getStoredCart } from "../utils/fackDb";

export const productsAndCartData = async () => {
  try {
    const [productsData, anotherData] = await Promise.all([
      fetch('all.json').then(response => response.json()),
      fetch('featured.json').then(response => response.json())
    ]);

    const products = productsData;
    const savedCart = getStoredCart();
    let cartArray = [];

    for (const id in savedCart) {
      const foundProduct = products.find(product => product.id === id);
      if (foundProduct) {
        foundProduct.quantity = savedCart[id];
        cartArray.push(foundProduct);
      }
    }

    return { cartArray, products, anotherData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}; */

