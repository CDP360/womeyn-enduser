import { createContext, useReducer } from "react";
import Cookies from 'js-cookie'
export const ContextStore = createContext();
const initialState = {
    cart: Cookies.get("CartDatas") ? JSON.parse(Cookies.get("CartDatas")) : { cartData: [] }
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case "CART_SUCCESS": {
            // const newItemCart = action.payload;
            // const existingproduct = state.cart.cartData.find((item) => item.id === newItemCart.id);
            // const cartData = existingproduct ? state.cart.cartData.map((item) => item.id === existingproduct.id ? newItemCart : item) : [...state.cart.cartData, newItemCart];
            // Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData }));
            // return { ...state, cart: { ...state.cart, cartData } }
            const newItem = action.payload;
            const existItem = state.cart.cartData.find(
                (item) => item.id === newItem.id
            );
            const cartData = existItem
                ? state.cart.cartData.map((item) =>
                    item.id === existItem.id ? newItem : item
                )
                : [...state.cart.cartData, newItem];
            Cookies.set('CartDatas', JSON.stringify({ ...state.cart, cartData }));
            return { ...state, cart: { ...state.cart, cartData } };
        }
        case "ADD_CART": {
            const newItemCart = action.payload;
            Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData: newItemCart }));
            return { cart: { ...state.cart, cartData: newItemCart } }

        }
        case "REMOVE_CART": {
            const newItemCart = action.payload;
            Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData: newItemCart }));
            return { cart: { ...state.cart, cartData: newItemCart } }
        }
        case "CART_REMOVE": {
            const cartData = state.cart.cartData.filter((item) => item.id !== action.payload.id);
            Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData }));
            return { ...state, cart: { ...state.cart, cartData } }
        }
        default: {
            return state;
        }
    }
}

export function StoreProviderContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
}