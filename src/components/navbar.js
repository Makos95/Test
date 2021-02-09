import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRLV <i className="fab fa-typo3"></i>{" "}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className="link-wrapper">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kontakt"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign up
                </Link>
              </li>
            </ul>
            {button && <button buttonStyle="btn--outline">SIGN UP </button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
