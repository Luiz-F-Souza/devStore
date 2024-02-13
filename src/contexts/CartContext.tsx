"use client"
import { ReactNode, createContext, useContext, useState } from "react"

type CartItem = {
  productId: number
  quantity: number
}
type CartContextType = {
  items: CartItem[]
  addToCart: (productId: number) => void
}
const CartContext = createContext({} as CartContextType)

type Props = {
  children: ReactNode
}
export function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const addToCart = (productId: number) => {
    setCartItems((prev) => {
      const productIndex = prev.findIndex(
        (product) => product.productId === productId
      )

      const itemAlreadyAdded = productIndex >= 0

      if (itemAlreadyAdded) {
        const currentItem = prev[productIndex]
        currentItem.quantity = currentItem.quantity + 1
        return [...prev]
      }
      return [...prev, { productId, quantity: 1 }]
    })
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
