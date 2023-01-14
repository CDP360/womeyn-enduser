
import { CART_SUCCESS,CART_DELETE } from '../../types';


const initialState = {
    cartitems: [],
    error: "",
    loading: false,
}

const Cart_Reducer = (state = initialState, action) => {
    switch (action.type) {

        case CART_SUCCESS:

            return {
                ...state,
                cartitems: window.localStorage.getItem("Cart") ? JSON.parse(window.localStorage.getItem("Cart")) : []
            }
        case CART_DELETE:
            const filter = state.cartitems.filter((item) => item.id !== action.payload);
            console.log('====================================');
            console.log("kalai123",filter);
            console.log('====================================');
            return {
                ...state,
                cartitems: filter,
            }
        default:
            return state;
    }
}


export default Cart_Reducer;