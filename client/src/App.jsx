import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

// import Pages Here
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import LoginRegister from "./pages/login-register/login-register.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// Import components
import Header from "./components/header/header.component";

// import redux actions and selectors
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = (props) => {
  // Get the props
  const { checkUserSession, currentUser } = props;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/home" /> : <LoginRegister />
          }
        />
        <Route
          path="/"
          render={() =>
            currentUser ? <Redirect to="/home" /> : <LoginRegister />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
