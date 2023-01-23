import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <ul className="header__ul">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="wishlist">Wishlist</Link>
        </li>
      </ul>
    </header>
  );
}
