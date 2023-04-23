import { combineReducers } from "redux";
import LoginReducer from "./loginreducer/LoginReducer";
import Womenslidercount from "./womeynslide";
import FavortReducer from "./favortsreducer/Favortsreducer";
import Aboutuscount from "./aboutusreducer/AboutusReducer";
import TokenReducer from "./tokencheckuser/Tokencheckuser";
const RootReducers = combineReducers({
    slidercount: Womenslidercount,
    loginUser: LoginReducer,
    favorts: FavortReducer,
    aboutcountdata: Aboutuscount,
    tokens:TokenReducer
});

export default RootReducers;
