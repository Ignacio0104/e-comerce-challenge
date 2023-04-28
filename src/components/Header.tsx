import { Link } from "react-router-dom";
import CartIcon from "../assets/icon-cart.svg";
import ProfilePic from "../assets/image-avatar.png";
import "./Header.css";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import CartModal from "./pure/CartModal";
import BurgerMenu from "../assets/icon-menu.svg";

interface HeaderProps {
  menu: (bool: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { cartState } = useCart();
  const [showCartMenu, setShowCartMenu] = useState(false);

  return (
    <div className="header-container">
      <div className="header-text">
        <div className="burger-menu-container">
          <img
            src={BurgerMenu}
            alt="menu"
            onClick={() => props.menu(true)}
          ></img>
        </div>
        <div className="header-title">
          <h2>sneakers</h2>
        </div>
        <div className="header-links">
          <Link to="/">Collections</Link>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="header-icons">
        <div
          className="cart-container"
          onClick={() => setShowCartMenu(!showCartMenu)}
        >
          <img className="cart" src={CartIcon} alt="shopping cart"></img>
          {cartState.products.length > 0 && <p>{cartState.products.length}</p>}
        </div>
        <img className="avatar" src={ProfilePic} alt="profile"></img>
      </div>
      {showCartMenu && <CartModal></CartModal>}
    </div>
  );
};

export default Header;
