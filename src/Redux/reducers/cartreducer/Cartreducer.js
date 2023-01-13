
import { CART_ERROR, CART_LOADING, CART_SUCCESS } from '../../types';


const initialState = {
    cartitems: [],
    error: "",
    loading: false,
}

const Cart_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_LOADING:
            return {
                error: "",
                loading: true
            }
        case CART_SUCCESS:
            return {
                ...state,
                cartitems: [...state.cartitems, action.payload]
            }
        case CART_ERROR:
            return {

                error: action.payload
            }
        default:
            return state;
    }
}


export default Cart_Reducer;