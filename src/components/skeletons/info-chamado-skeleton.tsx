import { Skeleton } from "../skeleton";

export default function InfoChamadoSkeleton() {
  return (
    <div className="w-full h-[400px] flex flex-col border border-primary bg-base-100 rounded-2xl p-4 gap-4">
      <div className="flex flex-col md:flex-row w-full gap-3 md:gap-0">
        <div className="flex justify-between md:justify-start md:gap-4">
          <Skeleton className="w-[100px] md:w-[200px]" />
          <Skeleton className="w-[100px] md:w-[200px]" />
        </div>
        <Skeleton className="w-full md:ml-auto md:w-[300px]" />
      </div>

      <div className="w-full h-px bg-neutral/30"></div>

      <div className="size-full grid grid-cols-3 gap-3 md:gap-0">
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
      </div>

      <div className="w-full h-px bg-neutral/30"></div>

      <div className="size-full grid grid-cols-3 gap-3 md:gap-0">
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
        <Skeleton className="w-full md:w-[200px]" />
      </div>
    </div>
  );
}
