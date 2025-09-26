import { useState } from "react";
import type { PessoaAssistida } from "../types/pessoa-assistida";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

type APIReturn = {
  "sucesso": boolean,
  "mensagem": string,
  "dados": PessoaAssistida,
  "tipo": string
}

export default function usePessoaAssistida() {
  const { getKey } = useLocalStorage("AUTH_TOKEN");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPessoaAssistida = async (id: string) => {
    const response = await apiFetcher.get<APIReturn>(
      `/PessoaAssistida/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getKey() ?? ""}`,
        },
      }
    );
    return response
  }

  return { isLoading, updateLoading: setIsLoading, fetch: getPessoaAssistida };
}
