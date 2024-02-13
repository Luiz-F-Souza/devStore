import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CartCounter } from "./clientComponents/CartCouter"
import { SearchForm } from "./clientComponents/SearchForm"

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <section className="flex items-center gap-5">
        <Link
          href="/"
          translate="no"
          className="text-2xl font-extrabold text-white"
        >
          devStore
        </Link>

        <SearchForm />
      </section>
      <nav>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <CartCounter />
          </li>
          <div className="w-px h-4 bg-zinc-700" />
          <li>
            <Link
              href="/"
              className="flex flex-1 items-center gap-2 hover:underline"
            >
              <span className="text-sm">Conta</span>
              <Image
                src="https://avatars.githubusercontent.com/u/71572565?s=120&v=4"
                className="h-6 w-6 rounded-full"
                width={24}
                height={24}
                alt="Sua foto de perfil"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
