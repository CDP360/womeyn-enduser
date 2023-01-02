
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from '../../types';


const initialState = {
    logindata: [],
    error: "",
    loading: false,
}

const Login_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                error: "",
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logindata: action.payload,
                error: ""
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: error
            }
        default:
            return state;
    }
}


export default Login_Reducer;