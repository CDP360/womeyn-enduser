import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducers from "../reducers";
const store = createStore(
    RootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
