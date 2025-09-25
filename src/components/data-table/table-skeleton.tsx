import { Skeleton } from "../skeleton";

export default function TableSkeleton() {
  const columns = Array.from({ length: 5 });
  const rows = Array.from({ length: 6 });

  return (
    <div className="rounded-md border border-neutral/30 overflow-hidden">
      <table className="w-full caption-bottom text-sm bg-base-100">
        <thead className="[&_tr]:border-b [&_tr]:border-neutral/30">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns.map((_, index) => (
              <th className="h-12 px-4 py-2" key={index}>
                <Skeleton />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {rows.map((_, index) => (
            <tr key={index} className="border-b border-neutral/40">
              {columns.map((_, idx) => (
                <td
                  key={idx}
                  className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                >
                  <Skeleton />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
