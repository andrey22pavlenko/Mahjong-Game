import { configureStore } from '@reduxjs/toolkit'
import { reducerCard } from '../reducer/reducerCard'

export const store = configureStore({
  reducer: {
    Card: reducerCard.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
