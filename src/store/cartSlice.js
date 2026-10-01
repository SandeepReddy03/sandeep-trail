import { createSlice } from '@reduxjs/toolkit'

const CART_STORAGE_KEY = 'cart-items'

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

const initialState = {
  items: loadCartFromStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, body, price, quantity = 1 } = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({
          id,
          title,
          body,
          price,
          quantity,
        })
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity = Math.max(1, Number(quantity) || 1)
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
    },
  },
})

export const { addToCart, updateCartItemQuantity, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
