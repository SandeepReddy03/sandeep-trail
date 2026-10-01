import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './albumsSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    cart: cartReducer,
  },
})
