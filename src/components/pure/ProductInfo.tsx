import { useState } from "react";
import CartIcon from "../../assets/icon-cart.svg";
import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import "./ProductInfo.css";
import { useCart } from "../../hooks/useCart";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const { cartState, addProduct } = useCart();
  const handleQuantities = (value: number) => {
    if (quantity + value >= 0) {
      setQuantity((prevValue) => prevValue + value);
    }
  };

  const handleCart = () => {
    for (let index = 0; index < quantity; index++) {
      addProduct({ name: "Fall limited Edition Sneakers", price: 125 });
    }
  };
  return (
    <div className="info-container">
      <h6 className="small-title">SNEAKER COMPANY</h6>
      <h1 className="main-title">Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <h3>$125.00</h3>
        <h4>50%</h4>
      </div>
      <p className="slashed-price">$250.00</p>
      <div className="button-container">
        <div className="quantity-controls">
          <img
            onClick={() => handleQuantities(-1)}
            src={minusIcon}
            alt="minus"
          />
          <h6>{quantity}</h6>
          <img onClick={() => handleQuantities(1)} src={plusIcon} alt="plus" />
        </div>
        <button className="add-btn" onClick={handleCart}>
          <img src={CartIcon} alt="Cart"></img>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
