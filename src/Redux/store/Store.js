import { configureStore} from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducers from "../reducers";


const store = configureStore(
    // RootReducers,
    // composeWithDevTools(applyMiddleware(thunk))
    {reducer:RootReducers},
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
);

export default store;
