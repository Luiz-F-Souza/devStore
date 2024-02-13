import { Skeleton } from "@/components/Skeleton"

export default function LoadingSearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-60 h-6" />

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
      </div>
    </div>
  )
}
