import { createStore, applyMiddleware } from "redux";

// import middlewares
import logger from "redux-logger";

// import rootreducers
import rootreducers from "./root.reducer";

const middlewares = [logger]; // add all middleware here.

// make your store here
const store = createStore(rootreducers, applyMiddleware(...middlewares));

export default store;
