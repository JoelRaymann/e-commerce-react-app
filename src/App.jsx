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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// import redux utils
import { connect } from "react-redux";

// import redux actions
import { setCurrentUser } from "./redux/user/user.actions";

// Testing Error Routed Page
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="h1">Sorry, you stumbled in the wrong place</h1>
    </div>
  );
};

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
