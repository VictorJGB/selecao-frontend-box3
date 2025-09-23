import { useCallback, useState } from "react";
import type { LoginResponse } from "../types/login-response";
import { apiFetcher } from "../utils/api";
import useLocalStorage from "./use-local-storage";

export default function useLogin() {
  const { setKey } = useLocalStorage('AUTH_TOKEN')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitLogin = useCallback(async (email: string, senha: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await apiFetcher.put<LoginResponse>('/Auth/login', {
        email,
        senha
      })

      setKey(response.data.dados.token)
    } catch (e) {
      if (e instanceof Error) setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { error, isLoading, submitLogin }
}