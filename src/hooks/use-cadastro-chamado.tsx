
import { useState } from "react";
import type { PessoaAssistida } from "../types/pessoa-assistida";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

export type ChamadoDTO = {
  latitude: string
  longitude: string
  pessoaAssistida: PessoaAssistida
  pessoaAssistidaId: string
  bairro: string
  rua: string
  numero: string
  cep: string
  cidade: string
  estado: string
}

export default function useCadastroChamado() {
  const { getKey } = useLocalStorage('AUTH_TOKEN')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitCadastro = async (formData: ChamadoDTO) => {

    const response = await apiFetcher.post('/Chamado', {
      ...formData
    },
      {
        headers: {
          Authorization: `Bearer ${getKey() ?? ""}`,
        },
      })

    return response
  }

  return { isLoading, updateLoading: setIsLoading, submitCadastro }
}

