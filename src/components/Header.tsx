import { Link } from "react-router-dom";
import CartIcon from "../assets/icon-cart.svg";
import ProfilePic from "../assets/image-avatar.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text">
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
        <img className="cart" src={CartIcon} alt="shopping cart"></img>
        <img className="avatar" src={ProfilePic} alt="profile"></img>
      </div>
    </div>
  );
};

export default Header;
