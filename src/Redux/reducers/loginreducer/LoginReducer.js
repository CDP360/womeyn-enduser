
import { LOGIN_SUCCESS } from '../../types';
const initialState = {
    logindata: [],
}
const Login_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                logindata: action.payload,
            }
        default:
            return state;
    }
}

export default Login_Reducer;