import { ERROR_WOMEN_SLIDER1, GETDATA_WOMEN_SLIDER1, LOADING_WOMEN_SLIDER1 } from "../../types";


const GetAboutusCount = (counts) => async (dispatch) => {
    dispatch({ type: LOADING_WOMEN_SLIDER1 });
    try {
        dispatch({ type: GETDATA_WOMEN_SLIDER1, payload: counts });
    } catch (err) {
        dispatch({ type: ERROR_WOMEN_SLIDER1, error: "Data Not Found 404" });
    }
};

export default GetAboutusCount;