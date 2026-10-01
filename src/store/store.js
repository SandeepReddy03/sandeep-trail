import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './albumsSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
})
