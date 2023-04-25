
import { THEME_LOADING, THEME_SUCCESS,THEME_ERROR } from '../../types';

const ThemeAction = (data) => async (dispatch) => {
    dispatch({ type: THEME_LOADING });
    try {
        dispatch({ type: THEME_SUCCESS, payload: data });

    } catch (err) {
        dispatch({ type: THEME_ERROR, error: "Not Theme Section" });
    }
};

export default ThemeAction;
