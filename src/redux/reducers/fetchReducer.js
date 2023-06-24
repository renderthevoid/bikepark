import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  status: 'loading',
}

export const fetchPizzas = createAsyncThunk('pizza/', async (params) => {
  const { categoryId, currentPage, order, sortType, searchValue } = params
  const { data } = await axios
    .get(`https://api.mockaroo.com/api/58168ab0?count=20&key=013fb6a0`, {
      headers: { 'X-Api-Key': 'c4ZZ4xL1DkO5PNlDCojQNQ==fVwiotuuxW7XCxz3' },
    })
    .then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
  return data
})

const fetchReducer = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = []
      state.status = 'error'
    },
  },
})

export const { setItems } = fetchReducer.actions

export default fetchReducer.reducer
