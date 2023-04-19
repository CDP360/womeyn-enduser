import { ERROR_WOMEN_SLIDER1, GETDATA_WOMEN_SLIDER1, LOADING_WOMEN_SLIDER1 } from "../../types";


const initialState = {
    about: [],
    loading: false,
    error: "",
};

const Aboutuscount = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_WOMEN_SLIDER1:
            return {
                loading: true,
                error: "",
            };
        case GETDATA_WOMEN_SLIDER1:
            return {
                ...state,
                loading: false,
                about: action.payload,
            };
        case ERROR_WOMEN_SLIDER1:
            return {
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default Aboutuscount;