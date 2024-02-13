import { Header } from "@/components/Header"
import { CartProvider } from "@/contexts/CartContext"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
