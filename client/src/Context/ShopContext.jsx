import { createContext, useState } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const contextValue = { all_product, cartItems };

  console.log("cartItems", cartItems);

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
