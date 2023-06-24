import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from '../reducers/bikeReducer'

export const store = configureStore({
  reducer: {
    selection: bikeReducer,
  },
})
