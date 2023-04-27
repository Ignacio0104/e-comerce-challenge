export interface Product {
  name: string;
  price: number;
}

export interface CartState {
  itemCount: number;
  products: Product[];
}

type CartAction =
  | { type: "addProduct"; payload: Product }
  | { type: "deleteProduct"; payload: Product };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        products: [...state.products, action.payload],
        itemCount: state.products.length,
      };
    case "deleteProduct":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.name !== action.payload.name
        ),
        itemCount: state.itemCount--,
      };
    default:
      return state;
  }
};
