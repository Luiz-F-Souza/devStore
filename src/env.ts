import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z
    .string()
    .url("forneça uma NEXT_PUBLIC_API_BASE_URL no .env.local"),
  APP_URL: z.string().url("forneça uma APP_URL no .env.local"),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(".env.local inválido", parsedEnv.error.flatten().fieldErrors)

  throw new Error("Variáveis ambiente inválidas.")
}

export const env = parsedEnv.data
