import Cookies from "js-cookie"
import { CART_SUCCESS, CART_DELETE, CART_ALL_DELETE } from "../../types"

export const Cartactions = (data) => async (dispatch) => {

   Cookies.set("ammakalia",data)
   dispatch({
      type: CART_SUCCESS,
      payload: data
   })
}

export const CartActionDelete = (data) => async (dispatch) => {
   console.log("kalaiid", data)
   dispatch({
      type: CART_DELETE,
      payload: data
   })
}



export const CartActionClearDataAll = (data) => async (dispatch) => {

   dispatch({
      type: CART_ALL_DELETE,
      payload: data
   })
}