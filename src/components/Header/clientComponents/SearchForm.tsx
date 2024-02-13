"use client"

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

export const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialQuery = searchParams.get("q")
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q as string

    if (!query) return null

    const normalizedQuery = query.toLocaleLowerCase().trim()

    router.push(`/search?q=${normalizedQuery}`)
  }

  return (
    <form className="" onSubmit={handleSearch}>
      <label className="flex w-[320px] items-center rounded-full  bg-zinc-900  ring-zinc-700">
        <Search className="w-5 h-5 ml-5" />
        <input
          name="q"
          defaultValue={initialQuery ?? ""}
          placeholder="Buscar produtor"
          className="flex-1 bg-transparent px-3 py-3  text-sm outline-none placeholder:text-zinc-500"
        />
      </label>
    </form>
  )
}
