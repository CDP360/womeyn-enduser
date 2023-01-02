import { combineReducers } from "redux";
import Login_Reducer from "./loginreducer/LoginReducer";
import Womenslidercount from "./womeynslide";
const RootReducers = combineReducers({
    slidercount: Womenslidercount,
    loginUser: Login_Reducer
});

export default RootReducers;
