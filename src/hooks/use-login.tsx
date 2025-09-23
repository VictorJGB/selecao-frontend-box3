import { useCallback, useState } from "react";
import type { LoginResponse } from "../types/login-response";
import { apiFetcher } from "../utils/api";

export default function useLogin() {
  const [data, setData] = useState<LoginResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitLogin = useCallback(async (email: string, senha: string) => {
    setIsLoading(true)

    try {
      const response = await apiFetcher.put('/Auth/login', {
        email,
        senha
      })
      setData(response.data)
    } catch (e) {
      console.error(e)
      if (e instanceof Error) setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { data, error, isLoading, submitLogin }
}