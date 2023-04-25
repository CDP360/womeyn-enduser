
const TokenErrorCheck = (ERRORS) => async (dispatch) => {
    // dispatch({ type: LOADING_WOMEN_SLIDER1 });
    try {
        dispatch({ type: "TOKEN_SUCCESS", payload: "no kalai" });
    } catch (err) {
        dispatch({ type: "TOKEN_ERROR", error: "Data Not Found 404" });
    }
};

export default TokenErrorCheck;