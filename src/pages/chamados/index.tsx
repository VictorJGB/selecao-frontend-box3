import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { CirclePlus } from "lucide-react";

import Button from "../../components/button";

import { toast } from "react-toastify";
import DataTable from "../../components/data-table";
import { chamadosTableColumns } from "../../components/data-table/chamados-columns";
import TableSkeleton from "../../components/data-table/table-skeleton";

import useChamados from "../../hooks/use-chamados";

export default function ChamadosPage() {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get('currentPage') ?? "1"
  const pageSize = searchParams.get('pageSize') ?? "10"
  const { data, error, isLoading } = useChamados(currentPage, pageSize);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);



  return (
    <div className="size-full flex flex-col items-center gap-12">
      <div className="w-full flex flex-col items-center justify-start gap-3">
        <h1 className="text-3xl font-bold ">Listagem de chamados</h1>
        <h3 className="text-lg text-neutral">
          Consulte informações sobre seus chamados
        </h3>
      </div>

      <div className="h-full container flex flex-col items-center mx-auto gap-4">
        {/* actions */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* TO-DO: Implement input search logic */}
          {/* <Input className="w-2/5" placeholder="Pesquise por um chamado" /> */}
          <Link to={"/chamados/novo"} className="ml-auto">
            <Button>
              Abrir chamado
              <CirclePlus className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="w-full mx-auto">
          {isLoading && !data && <TableSkeleton />}

          {data && (
            <DataTable
              columns={chamadosTableColumns}
              data={data.dados.dados}
              currentPage={currentPage}
              pageSize={pageSize}
              totalPages={data.dados.totalPages - 1}
              totalRegisters={data.dados.totalRegisters}
            />
          )}

          {error && !data && (
            <p className="text-lg font-semibold text-destructive">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
