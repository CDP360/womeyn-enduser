import { combineReducers } from "redux";
import Login_Reducer from "./loginreducer/LoginReducer";
import Womenslidercount from "./womeynslide";
import Theme_Reducer from './themereducer/Themereducer';
const RootReducers = combineReducers({
    slidercount: Womenslidercount,
    loginUser: Login_Reducer,
    themes:Theme_Reducer
});

export default RootReducers;
