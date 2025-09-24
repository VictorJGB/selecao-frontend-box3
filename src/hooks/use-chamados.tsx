import { useCallback, useEffect, useState } from "react";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

export default function useChamados() {
  const { getKey } = useLocalStorage('AUTH_TOKEN')

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const getChamados = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await apiFetcher.post('/Chamados/listagem', null, {
        headers: {
          'Authorization': `Bearer ${getKey() ?? ''}`
        }
      })
      const data = await response.data
      setData(data)
    } catch (e) {
      if (e instanceof Error) setError(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getChamados()
  }, [])

  return { data, isLoading, error, refetch: getChamados }
}