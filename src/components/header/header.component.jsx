import React from "react";
import "./header.styles.scss";

// Import Assets like SVG
import { ReactComponent as Logo } from "../../assets/logo-header.svg";

// Import routing functionals
import { Link } from "react-router-dom";

// import firebase utils
import { auth } from "../../firebase/firebase.utils";

// import redux utils
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
