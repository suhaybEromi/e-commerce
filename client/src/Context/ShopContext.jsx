import { createContext } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  return <ShopContext.Provider value="">{children}</ShopContext.Provider>;
}
