import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: '',
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')

  if (!response.ok) {
    throw new Error('Failed to fetch albums')
  }

  return response.json()
})

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default albumsSlice.reducer
