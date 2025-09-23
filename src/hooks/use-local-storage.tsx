export default function useLocalStorage(key: string) {
  function getKey() {
    const value = localStorage.getItem(key)
    if (value) return JSON.parse(value)

    return null
  }

  function setKey(strValue: string) {
    localStorage.setItem(key, JSON.stringify(strValue))
  }

  function removeKey() {
    localStorage.removeItem(key)
  }

  return {
    getKey, setKey, removeKey
  }
}