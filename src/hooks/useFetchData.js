import { useEffect, useRef, useState } from 'react'

const CACHE_TTL = 5 * 60 * 1000

const getCacheKey = (url) => `jsonplaceholder-cache:${url}`

const readCachedData = (url) => {
  try {
    const raw = sessionStorage.getItem(getCacheKey(url))

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw)
    const now = Date.now()

    if (!parsed?.timestamp || now - parsed.timestamp > CACHE_TTL) {
      sessionStorage.removeItem(getCacheKey(url))
      return null
    }

    return parsed.data
  } catch {
    return null
  }
}

const writeCachedData = (url, data) => {
  try {
    sessionStorage.setItem(
      getCacheKey(url),
      JSON.stringify({
        timestamp: Date.now(),
        data,
      }),
    )
  } catch {
    // Ignore storage quota or browser issues.
  }
}

const useFetchData = (url, initialValue = []) => {
  const initialValueRef = useRef(initialValue)
  const [items, setItems] = useState(() => readCachedData(url) ?? initialValueRef.current)
  const [loading, setLoading] = useState(() => !readCachedData(url))
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    const cachedData = readCachedData(url)

    if (cachedData) {
      setItems(cachedData)
      setLoading(false)
      return () => {
        isMounted = false
      }
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data = await response.json()

        if (isMounted) {
          const finalData = data ?? initialValueRef.current
          setItems(finalData)
          writeCachedData(url, finalData)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.message ?? 'Something went wrong')
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])

  return { items, loading, error }
}

export default useFetchData
