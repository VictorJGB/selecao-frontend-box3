import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import DataTable from "../../components/data-table";
import Input from "../../components/input";
import { chamadosTableColumns } from "../../components/data-table/chamados-columns";

import useChamados from "../../hooks/use-chamados";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ChamadosPage() {
  const { data, error, isLoading } = useChamados();

  useEffect(() => {
    if (error) toast.error(error.message);
  });

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
          <Input className="w-2/5" placeholder="Pesquise por um chamado" />
          <Link to={"/chamados/novo"}>
            <Button>
              Abrir chamado
              <CirclePlus className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="w-full mx-auto">
          {isLoading && <p>Carregando chamados...</p>}

          {data && (
            <DataTable columns={chamadosTableColumns} data={data.dados.dados} />
          )}

          {error && (
            <p className="text-lg font-semibold text-destructive">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
