import { CART_SUCCESS,CART_DELETE } from "../../types"


export const Cartactions = (data) => async (dispatch) => {
   const cart = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];
   const duplicate = cart.filter(item => item.id == data.id);
   if (duplicate.length === 0) {
      const productAdd = {
         ...data,
         count: 1
      }
      cart.push(productAdd);
      localStorage.setItem("Cart", JSON.stringify(cart));
   }

   dispatch({
      type: CART_SUCCESS,
      payload: data
   })
}

export const CartActionDelete = (data) => async (dispatch) => {
   // const cart = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];
   // const duplicate = cart.filter(item => item.id == data.id);
   // if (duplicate.length === 0) {
   //    const productAdd = {
   //       ...data,
   //       count: 1
   //    }
   //    cart.push(productAdd);
   //    localStorage.setItem("Cart", JSON.stringify(cart));
   // }

   dispatch({
      type: CART_DELETE,
      payload: data
   })
}