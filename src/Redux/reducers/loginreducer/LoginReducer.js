

const initialState = {
    logindata: [],
    error: ""
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                logindata: action.payload,
                error: ""
            }

        case "LOGIN_ERROR":
            return {
                ...state,
                logindata: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default LoginReducer;