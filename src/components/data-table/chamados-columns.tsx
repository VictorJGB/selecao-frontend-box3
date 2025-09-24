import type { Chamado } from "../../types/chamados";
import formatDateToPTBR from "../../utils/format-date";
import type { Column } from "../data-table";

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
    cell: (row) => <p>{row.status.label}</p>,
  },
];
