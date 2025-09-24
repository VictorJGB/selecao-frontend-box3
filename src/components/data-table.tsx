import type { ReactNode } from "react";

export type Column<T> = {
  accessor: keyof T;
  header: string;
  cell?: (item: T) => ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
};

export default function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="rounded-md border border-neutral overflow-hidden">
      <table className="w-full caption-bottom text-sm bg-base-100">
        <thead className="[&_tr]:border-b bg-primary/20">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns.map((column) => (
              <th
                className="h-12 px-4 text-left text-base align-middle font-bold text-primary-foreground"
                key={String(column.accessor)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b transition-colors hover:bg-primary/50 cursor-pointer data-[state=selected]:bg-muted"
            >
              {columns.map((column, idx) => (
                <td
                  key={idx}
                  className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                >
                  {column.cell
                    ? column.cell(item)
                    : (item[column.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
