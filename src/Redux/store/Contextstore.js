// // import { createContext, useReducer } from "react";
// // import Cookies from 'js-cookie'

// // export const ContextStore = createContext();

// // const initialState = {
// //     cart: Cookies.get("CartDatas") ? JSON.parse(Cookies.get("CartDatas")) : { cartData: [] }
// // }

// // function reducer(state = initialState, action) {
// //     switch (action.type) {
// //         case "CART_SUCCESS": {
// //             // const newItemCart = action.payload;
// //             // const existingproduct = state.cart.cartData.find((item) => item.id === newItemCart.id);
// //             // const cartData = existingproduct ? state.cart.cartData.map((item) => item.id === existingproduct.id ? newItemCart : item) : [...state.cart.cartData, newItemCart];
// //             // Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData }));
// //             // return { ...state, cart: { ...state.cart, cartData } }

// //             const check = state.cart?.cartData.find((cart) => cart.id === action.id);
// //             if (check) {
// //                 return state?.cart;
// //             } else {
// //                 product = action.product;
// //                 product["qty"] = 1;
// //                 updatedQty = qty + 1;
// //                 updatedPrice = totalPrice + product.price;
// //                 return {
// //                     shoppingCart: [product, ...shoppingCart],
// //                     totalPrice: updatedPrice,
// //                     qty: updatedQty,
// //                 };
// //             }

// //         }
// //         case "CART_REMOVE": {
// //             const cartData = state.cart.cartData.filter((item) => item.id !== action.payload.id);
// //             Cookies.set("CartDatas", JSON.stringify({ ...state.cart, cartData }));
// //             return { ...state, cart: { ...state.cart, cartData } }
// //         }


// //         default: {
// //             return state;
// //         }
// //     }
// // }


// // export function StoreProviderContext({ children }) {
// //     const [state, dispatch] = useReducer(reducer, initialState);
// //     const value = { state, dispatch };
// //     return <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
// // }




// export const CartReducer = (state, action) => {
//     const { shoppingCart, qty, totalPrice } = state;
//     console.log(state);
  
//     let product;
//     let index;
//     let updatedPrice;
//     let updatedQty;
//     let filtered;
  
//     switch (action.type) {
//       case "ADD_TO_CART":
//         const check = shoppingCart.find((cart) => cart.id === action.id);
//         if (check) {
//           return state;
//         } else {
//           product = action.product;
//           product["qty"] = 1;
//           updatedQty = qty + 1;
//           updatedPrice = totalPrice + product.price;
//           return {
//             shoppingCart: [product, ...shoppingCart],
//             totalPrice: updatedPrice,
//             qty: updatedQty,
//           };
//         }
  
//       case "INCREMENT":
//         product = shoppingCart.find((product) => product.id === action.id);
//         index = shoppingCart.findIndex((prod) => prod.id === action.id);
//         product.qty = product.qty + 1;
//         updatedPrice = totalPrice + product.price;
//         updatedQty = qty + 1;
//         shoppingCart[index] = product;
//         return {
//           shoppingCart: [...shoppingCart],
//           totalPrice: updatedPrice,
//           qty: updatedQty,
//         };
  
//       case "DECREMENT":
//         product = shoppingCart.find((product) => product.id === action.id);
//         index = shoppingCart.findIndex((prod) => prod.id === action.id);
//         if (product.qty > 1) {
//           product.qty = product.qty - 1;
//           updatedPrice = totalPrice - product.price;
//           updatedQty = qty - 1;
//           shoppingCart[index] = product;
//           return {
//             shoppingCart: [...shoppingCart],
//             totalPrice: updatedPrice,
//             qty: updatedQty,
//           };
//         } else {
//           return {
//             shoppingCart: [...shoppingCart],
//             totalPrice: totalPrice,
//             qty: qty,
//           };
//         }
  
//       case "DELETE_PRODUCT":
//         console.log("I Am Delete");
//         filtered = shoppingCart.filter((cart) => cart.id !== action.id);
//         product = shoppingCart.find((cart) => cart.id === action.id);
//         updatedPrice = totalPrice - product.price * product.qty;
//         updatedQty = qty - product.qty;
//         return {
//           shoppingCart: [...filtered],
//           totalPrice: updatedPrice,
//           qty: updatedQty,
//         };
  
//       default:
//         return state;
//     }
//   };
  