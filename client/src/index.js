import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import redux utils
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import store here
import { store, persistor } from "./redux/store";

// import Routing functionals
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
