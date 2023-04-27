import { createContext } from "react";
import { CartState, Product } from "./cartReducer";

export type CartContextProps = {
  cartState: CartState;
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};

export const ShopCartContext = createContext<CartContextProps>(
  {} as CartContextProps
);
