

const initialState = {
    Tokens: "",
    error: false
}
const TokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOKEN_SUCCESS":
            return {
                ...state,
                Tokens: action.payload,
                error: ""
            }

        case "TOKEN_ERROR":
            return {
                ...state,
                Tokens: action.payload,
                error: ""
            }

        default:
            return state;
    }
}

export default TokenReducer;