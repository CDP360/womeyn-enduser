import {
    ERROR_WOMEN_SLIDER,
    GETDATA_WOMEN_SLIDER,
    LOADING_WOMEN_SLIDER,
} from "../types";

const Getwomencount = (counts) => async (dispatch) => {
    console.log(counts,"thala");
    dispatch({ type: LOADING_WOMEN_SLIDER });
    try {
        dispatch({ type: GETDATA_WOMEN_SLIDER, payload: counts });
    } catch (err) {
        dispatch({ type: ERROR_WOMEN_SLIDER, error: "Data Not Found 404" });
    }
};

export default Getwomencount;
