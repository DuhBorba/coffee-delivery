import React, { ReactNode } from 'react'
import { Coffee } from '../pages/Home/components/Card'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = React.createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeExistsCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeExistsCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  let cartQuantity = 0
  cartItems.map((cartItem) => {
    cartQuantity += cartItem.quantity
    return cartQuantity
  })

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
