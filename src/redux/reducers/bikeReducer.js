import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalItems: 0,
  options: [],
}

const bikeReducer = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    addOption: (state, action) => {
      state.options.push(action.payload)
    },
    deleteOption: (state, action) => {
      state.options = state.options.filter((type) => type !== action.payload)
    },
  },
})

export const { addOption, deleteOption } = bikeReducer.actions

export default bikeReducer.reducer
