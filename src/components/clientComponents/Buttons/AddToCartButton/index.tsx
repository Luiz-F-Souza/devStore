"use client"

import { useCart } from "@/contexts/CartContext"

type Props = {
  productId: number
}
export const AddToCartButton = ({ productId }: Props) => {
  const { addToCart } = useCart()
  return (
    <button
      onClick={() => addToCart(productId)}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
