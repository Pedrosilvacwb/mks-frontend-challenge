import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './productSlice';

export interface IProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  amount?: number;
}

export interface RootState {
  data: IProducts[] | [];
  loading: boolean;
  error: any;
  cart: IProducts[] | [];
  openCart: boolean;
}

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
