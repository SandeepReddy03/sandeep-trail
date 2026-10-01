import { useCallback, useState } from 'react'

const useQuantity = (initialQuantity = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  const decrementQuantity = useCallback(() => {
    setQuantity((value) => Math.max(initialQuantity, value - 1))
  }, [initialQuantity])

  const incrementQuantity = useCallback(() => {
    setQuantity((value) => value + 1)
  }, [])

  return {
    quantity,
    decrementQuantity,
    incrementQuantity,
  }
}

export default useQuantity
