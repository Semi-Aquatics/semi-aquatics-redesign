import { cartActionTypes } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  // cartItemCount: 0,
  // cartItems: []
  cartId: null,
}
const cartReducer = (state = INITIAL_STATE, action: { type: string; payload: object }) => {
  switch(action.type){
    // case cartActionTypes.ADD_ITEM:
    //   return {
    //     ...state,
    //     cartItems: addItemToCart(state.cartItems, action.payload)
    //   }
    case cartActionTypes.SET_CART_ID:
      return {
        ...state,
        cartId: action.payload
      }
  
    default:
      return state;
  }
}

export default cartReducer;
