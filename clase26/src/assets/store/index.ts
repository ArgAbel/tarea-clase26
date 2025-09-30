import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TareasReducer from './tareasSlaces.ts';
export const store = configureStore({
  reducer: {
  users: TareasReducer,
  },
});