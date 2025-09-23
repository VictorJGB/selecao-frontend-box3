export type LoginResponse = {
  sucesso: boolean,
  mensagem: string,
  dados: {
    nome: string,
    email: string,
    token: string
  },
  tipo: string
}