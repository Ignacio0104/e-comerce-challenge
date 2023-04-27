import React, { useReducer } from "react";
import { ShopCartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { Product } from "./cartReducer";

const INITIAL_STATE = {
  itemCount: 0,
  products: [],
};

interface props {
  children: JSX.Element | JSX.Element[];
}

const CartProvider = ({ children }: props) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addProduct = (product: Product) => {
    dispatch({ type: "addProduct", payload: product });
  };

  const deleteProduct = (product: Product) => {
    dispatch({ type: "deleteProduct", payload: product });
  };
  return (
    <ShopCartContext.Provider value={{ cartState, addProduct, deleteProduct }}>
      {children}
    </ShopCartContext.Provider>
  );
};

export default CartProvider;
