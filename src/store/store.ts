import { configureStore } from '@reduxjs/toolkit'
import { cardReducer } from '../reducers/cardReducer'

export const store = configureStore({
  reducer: {
    Card: cardReducer.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
