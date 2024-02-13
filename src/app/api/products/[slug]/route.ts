import { z } from "zod"
import data from "../data.json"

type Params = {
  params: { slug: string }
}
export async function GET(_request: Request, { params }: Params) {
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json(
      { message: "produto não encontrado" },
      {
        status: 400,
      }
    )
  }
  return Response.json(product)
}
