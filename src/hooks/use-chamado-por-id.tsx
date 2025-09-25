import { useCallback, useEffect, useState } from "react";
import type { Chamado } from "../types/chamados";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

export default function useChamadoPorId(id: string) {
  const { getKey } = useLocalStorage("AUTH_TOKEN");

  const [data, setData] = useState<Chamado | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getChamadoPorId = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await apiFetcher.get(
        `/Chamado/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getKey() ?? ""}`,
          },
        }
      );
      const data = response.data.dados;
      setData(data);
    } catch (e) {
      if (e instanceof Error) setError(e);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getChamadoPorId();
  }, [getChamadoPorId]);

  return { data, isLoading, error, refetch: getChamadoPorId };
}
