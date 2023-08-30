import React, { ReactNode } from 'react'
import { Coffee } from '../pages/Home/components/Card'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  totalCheckout: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = React.createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storagedCartItems) {
      return JSON.parse(storagedCartItems)
    }
    return []
  })

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

  const cartQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  const totalCheckout = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

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

  function cleanCart() {
    setCartItems([])
  }

  React.useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        totalCheckout,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
