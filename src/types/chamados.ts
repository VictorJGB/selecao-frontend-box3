import type { PessoaAssistida } from "./pessoa-assistida";

export type Chamado = {
  pessoaAssistidaId: 2;
  pessoaAssistida: PessoaAssistida;
  atendimentoId: string;
  atendimento: string;
  dispositivo: {
    identificador: string;
    marca: string;
    modelo: string;
    id: number;
    dataCadastro: string;
    usuarioCadastro: string;
    dataEdicao: string;
    usuarioEdicao: string;
  };
  dataRespondido: string;
  enderecoValido: {
    value: string;
    label: string;
    type: string;
  };
  latitude: string;
  longitude: string;
  status: {
    value: string;
    label: string;
    type: string;
  };
  cidade: string;
  estado: string;
  bairro: string;
  rua: string;
  numero: string;
  cep: string;
  id: string;
  dataUltimaAlteracao: string;
  usuarioUltimaAlteracao: string;
  dataCadastro: string;
  usuarioCadastro: string;
};

export type ChamadoAPIReturn = {
  sucesso: true;
  mensagem: "";
  dados: {
    dados: Chamado[];
    totalPages: 47;
    currentPage: 1;
    pageSize: 1;
    totalRegisters: 47;
  };
  tipo: "success";
};
