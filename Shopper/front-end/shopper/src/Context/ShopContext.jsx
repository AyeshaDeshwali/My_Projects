import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all-product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  const cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0; // Initialize each product ID to 0
  });
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Loop through cart items
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product by its ID
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          // Calculate total price for the product
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount; // Ensure the total is returned after the loop
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
