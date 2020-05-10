import React from "react";
import "./App.css";

// import Pages Here
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

// import routing functionals
import { Route, Switch } from "react-router-dom";

// Testing Error Routed Page
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="h1">Sorry, you stumbled in the wrong place</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
