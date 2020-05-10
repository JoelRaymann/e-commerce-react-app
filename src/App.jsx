import React from "react";
import "./App.css";

// import components
import HomePage from "./pages/homepage/homepage.component";

// import routing functionals
import { Route, Switch } from "react-router-dom";

// Test HatsPage
const HatsPage = () => {
  return (
    <div className="hats-page">
      <h1 className="h1">Welcome to Hats Page</h1>
    </div>
  );
};

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
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
