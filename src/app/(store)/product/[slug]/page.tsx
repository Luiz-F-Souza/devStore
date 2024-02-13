import { AddToCartButton } from "@/components/clientComponents/Buttons/AddToCartButton"
import { Product } from "@/data/@types/product"
import { api } from "@/data/api"
import { Metadata } from "next"
import Image from "next/image"

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60, //1m de cache
    },
  })
  const products = await response.json()
  return products
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api("/products/featured")
  const featuredProducts: Product[] = await response.json()
  return featuredProducts.map((featured) => {
    return {
      slug: featured.slug,
    }
  })
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug)

  return (
    <article className="relative grid grid-cols-3 max-h-[860px]">
      <section className="col-span-2 overflow-hidden">
        <Image
          alt=""
          src={product.image}
          width={860}
          height={860}
          quality={100}
          loading="eager"
          className="w-full h-full"
        />
      </section>

      <section className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500 font-semibold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/juros de{" "}
            {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              P
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              M
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              G
            </button>
            <button className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
              GG
            </button>
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </section>
    </article>
  )
}
