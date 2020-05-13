import React from "react";
import "./App.css";

// import Pages Here
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import LoginRegister from "./pages/login-register/login-register.component";

// Import components
import Header from "./components/header/header.component";

// import routing functionals
import { Route, Switch } from "react-router-dom";

// importing firebase utils
import { auth } from "./firebase/firebase.utils";

// Testing Error Routed Page
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="h1">Sorry, you stumbled in the wrong place</h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={LoginRegister} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
