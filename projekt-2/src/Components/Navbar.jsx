import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuZeigen, setMenuZeigen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="./logo/Screenshot 2023-12-08 113905.png" alt="" />
          </Link>
        </div>
        <div
          className="menu"
          onClick={() => {
            setMenuZeigen(!menuZeigen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={menuZeigen ? "zeigen" : ""}>
          <Link
            to="/"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            About
          </Link>
          <Link
            to="/products"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            Products
          </Link>
          <Link
            to="/food"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            Food
          </Link>
          <Link
            to="/cart"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            🛒Cart
          </Link>

          <Link
            to="/contact"
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
