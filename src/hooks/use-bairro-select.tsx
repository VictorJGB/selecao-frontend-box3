import { useCallback, useEffect, useState } from "react";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

type APIReturn = {
  "sucesso": boolean,
  "mensagem": string,
  "dados":
  {
    "id": number,
    "descricao": string
  }[]
  ,
  "tipo": string
}


export default function useBairroSelect() {
  const { getKey } = useLocalStorage("AUTH_TOKEN");

  const [data, setData] = useState<APIReturn | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getBairrosSelect = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await apiFetcher.post<APIReturn>(
        "/Chamado/select/bairro",
        {
          pesquisa: ""
        },
        {
          headers: {
            Authorization: `Bearer ${getKey() ?? ""}`,
          },
        }
      );
      const data = response.data;
      setData(data);
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getBairrosSelect();
  }, [getBairrosSelect]);

  return { data, isLoading, error, refetch: getBairrosSelect };
}
