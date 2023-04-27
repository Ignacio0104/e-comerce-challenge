import { useContext } from "react";
import { ShopCartContext } from "../context/CartContext";

export const useCart = () => {
  const { cartState, addProduct, deleteProduct } = useContext(ShopCartContext);

  return {
    cartState,
    addProduct,
    deleteProduct,
  };
};
