import { useCallback, useState } from "react";
import type { ChamadoAPIReturn } from "../types/chamados";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

export default function useLogado() {
  const { getKey } = useLocalStorage("AUTH_TOKEN");

  const [data, setData] = useState<ChamadoAPIReturn | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getIsLogado = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await apiFetcher.get(
        "/Auth/Logado",
        {
          headers: {
            Authorization: `Bearer ${getKey() ?? ""}`,
          },
        }
      );
      const data = response.data;
      setData(data);

      console.log({ logData: data })
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);


  return { data, isLoading, error, verifyToken: getIsLogado };
}
