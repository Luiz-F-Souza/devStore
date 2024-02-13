"use client"

import { useCart } from "@/contexts/CartContext"

export const CartCounter = () => {
  const { items } = useCart()
  return <span>Cart {items.length}</span>
}
