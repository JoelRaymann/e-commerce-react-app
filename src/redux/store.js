import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// import middlewares
import logger from "redux-logger";

// import rootreducers
import rootReducers from "./root.reducer";

const middlewares = [logger]; // add all middleware here.

// make your store here
export const store = createStore(rootReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
