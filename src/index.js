import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import redux utils
import { Provider } from "react-redux";

// import store here
import store from "./redux/store";

// import Routing functionals
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
