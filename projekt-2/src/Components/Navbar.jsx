import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuZeigen, setMenuZeigen] = useState(false);

  return (
    <div>
      <div className="Home" id="home">
        <nav>
          <BrowserRouter>
            <div className="logo">
              <a href="#home">
                <h5>Organic</h5>
              </a>
            </div>
            <div className="navbar">
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
              <ul className={menuZeigen ? "zeigen" : ""}>
                <li>
                  <a
                    href="#home"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#food"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    Food
                  </a>
                </li>
                <li>
                  <a
                    href="#cart"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    🛒Cart
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => {
                      setMenuZeigen(!menuZeigen);
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </BrowserRouter>
        </nav>
        <h1>
          Organic <br />
          Food For A <br /> Golden LIfe{" "}
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
