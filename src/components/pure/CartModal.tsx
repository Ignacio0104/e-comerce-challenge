import { useCart } from "../../hooks/useCart";
import "./CartModal.css";
import ProductPic from "../../assets/image-product-1-thumbnail.jpg";
import TrashCan from "../../assets/icon-delete.svg";
import { Product } from "../../context/cartReducer";

const CartModal = () => {
  const { cartState, deleteProduct } = useCart();

  const handleDelete = () => {
    deleteProduct({ name: "Fall limited Edition Sneakers", price: 125 });
  };

  return (
    <div className="cart-menu">
      <h2 className="cart-title">Cart</h2>
      {cartState.products.length > 0 ? (
        <div className="cart-container">
          <div className="product-container">
            <img className="product-pic" src={ProductPic} alt="shoes"></img>
            <div className="product-description">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x ${cartState.products.length}{" "}
                <span>${125 * cartState.products.length}</span>
              </p>
            </div>
            <img
              className="trash-icon"
              onClick={() => handleDelete()}
              src={TrashCan}
              alt="trash"
            ></img>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      ) : (
        <p className="cart-text">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartModal;
