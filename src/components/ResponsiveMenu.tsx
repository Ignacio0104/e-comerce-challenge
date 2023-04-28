import React from "react";
import "./ResponsiveMenu.css";
import CloseIcon from "../assets/icon-close.svg";
import { Link } from "react-router-dom";

interface ResponsiveMenuProps {
  menu: (bool: boolean) => void;
}

const ResponsiveMenu = (props: ResponsiveMenuProps) => {
  return (
    <div className="menu-container-resp">
      <img src={CloseIcon} alt="close" onClick={() => props.menu(false)}></img>
      <ul className="menu-links">
        <li onClick={() => props.menu(false)}>
          <Link to="/">Collections</Link>
        </li>
        <li onClick={() => props.menu(false)}>
          <Link to="/">Men</Link>
        </li>
        <li onClick={() => props.menu(false)}>
          <Link to="/">Women</Link>
        </li>
        <li onClick={() => props.menu(false)}>
          <Link to="/">About</Link>
        </li>
        <li onClick={() => props.menu(false)}>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
