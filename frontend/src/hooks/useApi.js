import { useState } from 'react'

export function useApi() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = async (url, options = {}) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('Error en la petición')
      const data = await response.json()
      return data
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { request, loading, error }
}