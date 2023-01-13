import { CART_SUCCESS } from "../../types"


export const Cartactions = (data) => {
   return {
      type: CART_SUCCESS,
      payload: data
   }
}