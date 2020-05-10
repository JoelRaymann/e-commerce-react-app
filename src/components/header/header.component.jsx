import React from "react";
import "./header.styles.scss";

// Import Assets like SVG
import { ReactComponent as Logo } from "../../assets/logo-header.svg";

// Import routing functionals
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/home">
        <Logo className="logo" />
      </Link>
      <div className="options-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
