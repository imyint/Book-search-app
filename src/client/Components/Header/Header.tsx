import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { State } from "../../Types/types";
import { useAppDispatch, useAppSelector } from "../../Rtk";
import { logout } from "../../Rtk/userSlice";

export default function Header() {
  const userToken = useAppSelector((state: State) => state.user.userToken);
  const dispatch = useAppDispatch();
  const links =
    userToken !== null ? (
      <ul className="header__ul">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="home" onClick={() => dispatch(logout())}>
            Logout
          </Link>
        </li>
      </ul>
    ) : (
      <ul className="header__ul">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    );
  return <header>{links}</header>;
}
