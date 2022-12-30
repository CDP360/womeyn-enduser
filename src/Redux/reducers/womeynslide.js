import { ERROR_WOMEN_SLIDER, GETDATA_WOMEN_SLIDER, LOADING_WOMEN_SLIDER } from "../types";


const initialState = {
    counts: [],
    loading: false,
    error: "",
};

const Womenslidercount = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_WOMEN_SLIDER:
            return {
                loading: true,
                error: "",
            };
        case GETDATA_WOMEN_SLIDER:
            return {
                ...state,
                loading: false,
                counts: action.payload,
            };
        case ERROR_WOMEN_SLIDER:
            return {
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default Womenslidercount;