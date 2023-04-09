const initialState = {
    favortsdata: [],
    error: false
}
const FavortReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAVORTS_SUCCESS":
            return {
                ...state,
                favortsdata: action.payload,
                error: ""
            }
        case "FAVORTS_ERROR":
            return {
                ...state,
                favortsdata: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default FavortReducer;