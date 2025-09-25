import type { Column } from ".";
import type { Chamado } from "../../types/chamados";
import formatDateToPTBR from "../../utils/format-date";
import Badge from "../badge";

export const chamadosTableColumns: Column<Chamado>[] = [
  {
    accessor: "id",
    header: "ID",
  },
  {
    accessor: "bairro",
    header: "Bairro",
  },
  {
    accessor: "dataCadastro",
    header: "Data de Cadastro",
    cell: (row) => <p>{formatDateToPTBR(row.dataCadastro)}</p>,
  },
  {
    accessor: "status",
    header: "Status",
    cell: (row) => (
      <Badge
        className="text-xs"
        variant={
          row.status.value.toLowerCase() === "finalizado"
            ? "success"
            : row.status.value.toLowerCase() === "rejeitado"
            ? "destructive"
            : "warning"
        }
      >
        {row.status.label}
      </Badge>
    ),
  },
];
