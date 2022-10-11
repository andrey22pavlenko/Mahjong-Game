import { configureStore} from '@reduxjs/toolkit';
import { reducerApp } from './reducerApp';


export const store = configureStore({
  reducer: {
     Card:reducerApp.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
