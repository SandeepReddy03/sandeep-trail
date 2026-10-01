import { useEffect, useState } from 'react'

export default function useFetchData(url) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data = await response.json()

        if (isMounted) {
          setItems(data)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
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
