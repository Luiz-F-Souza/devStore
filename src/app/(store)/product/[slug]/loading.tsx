import { Skeleton } from "@/components/Skeleton"

export default function LoadingHomePage() {
  return (
    <div className="relative grid grid-cols-3 h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      <section className="flex flex-col justify-center px-12">
        <Skeleton className="w-1/2 h-12 mb-4" />

        <Skeleton className="mt-2 w-2/3 h-4" />

        <div className="mt-8 flex items-center gap-3">
          <Skeleton className="w-full h-8" />
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <Skeleton className="flex h-9 w-14" />
            <Skeleton className="flex h-9 w-14 " />
            <Skeleton className="flex h-9 w-14 " />
            <Skeleton className="flex h-9 w-14 " />
          </div>
        </div>

        <button
          disabled
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white"
        >
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  )
}
