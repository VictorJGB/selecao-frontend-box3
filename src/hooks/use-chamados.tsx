import { useCallback, useEffect, useState } from "react";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";
import type { ChamadoAPIReturn } from "../types/chamados";

export default function useChamados() {
  const { getKey } = useLocalStorage("AUTH_TOKEN");

  const [data, setData] = useState<ChamadoAPIReturn | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getChamados = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await apiFetcher.post<ChamadoAPIReturn>(
        "/Chamado/listagem",
        {
          currentPage: 1,
          pageSize: 1,
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
    getChamados();
  }, [getChamados]);

  return { data, isLoading, error, refetch: getChamados };
}
