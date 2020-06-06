import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// import middlewares
import logger from "redux-logger";

// import rootreducers
import rootReducers from "./root.reducer";

const middlewares = []; // add all middleware here.

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
} else if(process.env.NODE_ENV === "production") {
    ;
}

// make your store here
export const store = createStore(rootReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
