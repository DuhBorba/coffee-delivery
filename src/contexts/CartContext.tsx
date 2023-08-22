import React, { ReactNode } from 'react'
import { Coffee } from '../pages/Home/components/Card'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
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

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCoffeeCart = produce(cartItems, (draft) => {
      const coffeeExistsCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsCart >= 0) {
        const item = draft[coffeeExistsCart]

        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCoffeeCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCoffeeCart = produce(cartItems, (draft) => {
      const coffeeExistsCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsCart >= 0) {
        draft.splice(coffeeExistsCart, 1)
      }
    })

    setCartItems(newCoffeeCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
