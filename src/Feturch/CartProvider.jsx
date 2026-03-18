import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer';



 // eslint-disable-next-line react-refresh/only-export-components
 export const CartContext=createContext();
const CartProvider = ({children}) => {

    const [cart,dispatch]=useReducer(CartReducer,[])
  return (
    <CartContext.Provider value={{cart,dispatch}}>
{children}
    </CartContext.Provider>
  )
}

export default CartProvider