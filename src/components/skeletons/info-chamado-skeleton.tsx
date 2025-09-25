import { Skeleton } from "../skeleton";

export default function InfoChamadoSkeleton() {
  return (
    <div className="w-full h-[400px] flex flex-col border border-primary bg-base-100 rounded-2xl p-4 gap-4">
      <div className="flex w-full">
        <div className="flex gap-4">
          <Skeleton className="w-[200px]" />
          <Skeleton className="w-[100px]" />
        </div>
        <Skeleton className="ml-auto w-[300px]" />
      </div>

      <div className="w-full h-px bg-neutral/30"></div>

      <div className="size-full grid grid-cols-3">
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
      </div>

      <div className="w-full h-px bg-neutral/30"></div>

      <div className="size-full grid grid-cols-3">
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
      </div>
    </div>
  );
}
