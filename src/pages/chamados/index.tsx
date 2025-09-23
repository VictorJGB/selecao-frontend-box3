import { CirclePlus } from "lucide-react";
import Button from "../../components/button";
import DataTable, { type Column } from "../../components/data-table";
import Input from "../../components/input";

const columns: Column<any>[] = [
  {
    accessor: 'id',
    header: 'ID'
  },
  {
    accessor: 'bairro',
    header: 'Bairro'
  },
  {
    accessor: 'dataCadastro',
    header: 'Data de Cadastro'
  },
  {
    accessor: 'status',
    header: 'Status'
  }
]

const data = [
  {
    id: 1,
    bairro: "Centro",
    dataCadastro: "2025-09-23",
    status: "Aberto"
  },
  {
    id: 2,
    bairro: "Boa Viagem",
    dataCadastro: "2025-09-22",
    status: "Em andamento"
  },
  {
    id: 3,
    bairro: "Pina",
    dataCadastro: "2025-09-21",
    status: "Fechado"
  },
  {
    id: 4,
    bairro: "Casa Forte",
    dataCadastro: "2025-09-20",
    status: "Aberto"
  },
  {
    id: 5,
    bairro: "Graças",
    dataCadastro: "2025-09-19",
    status: "Fechado"
  }
];

export default function ChamadosPage() {
  return (
    <div className="size-full flex flex-col items-center gap-12">
      <div className="w-full flex flex-col items-center justify-start gap-3">
        <h1 className="text-3xl font-bold ">Listagem de chamados</h1>
        <h3 className="text-lg text-neutral">Consulte informações sobre seus chamados</h3>
      </div>

      <div className="h-full container flex flex-col items-center mx-auto gap-2">
        {/* actions */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <Input className="w-2/5" placeholder="Pesquise por um chamado" />
          <Button>
            Novo chamado
            <CirclePlus className="size-4 ml-2" />
          </Button>
        </div>
        <div className="w-full mx-auto">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
