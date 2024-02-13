import Image from "next/image"
import Link from "next/link"

import { api } from "@/data/api"
import { Product } from "@/data/@types/product"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}
async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, //1h de cache
    },
  })
  const products = await response.json()
  return products
}
export default async function HomePage() {
  const [highlightedProduc, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduc.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highlightedProduc.image}
          alt=""
          width={860}
          height={860}
          quality={100}
          loading="eager"
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500  bg-black/60 p-0.5 pl-5">
          <span className="text-sm truncate">{highlightedProduc.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduc.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              alt="Moletom branco com escritas 'Come to the AI Side'. Capus e bolsos na frente."
              width={860}
              height={860}
              quality={100}
              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500  bg-black/60 p-0.5 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {highlightedProduc.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </main>
  )
}
