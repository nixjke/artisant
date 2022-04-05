import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'https://artisant.io/api/products'

export interface InitialState {
  items: Array<any>
  isLoading: boolean
  error: string
}

const initialState: InitialState = {
  items: [],
  isLoading: false,
  error: ''
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(BASE_URL)
  return response.data.data.products
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = true
    })
  }
})

export const {} = productSlice.actions

export default productSlice.reducer
