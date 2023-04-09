import { combineReducers } from "redux";
import LoginReducer from "./loginreducer/LoginReducer";
import Womenslidercount from "./womeynslide";
import FavortReducer from "./favortsreducer/Favortsreducer";
const RootReducers = combineReducers({
    slidercount: Womenslidercount,
    loginUser: LoginReducer,
    favorts:FavortReducer
});

export default RootReducers;
