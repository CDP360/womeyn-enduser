import { THEME_LOADING, THEME_SUCCESS } from "../../types"
import { THEME_ERROR } from './../../types';


const initialState = {
    theme: true,
    error: "",
    loading: false
}

const Theme_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_LOADING:
            return {
                ...state,
                error: "",
                loading: true
            }
        case THEME_SUCCESS:
            return Object.assign({}, state, {
                theme: !state.theme,
            });
        case THEME_ERROR:
            return {
                ...state,
                error: error
            }
        default:
            return state;
    }
}


export default Theme_Reducer;