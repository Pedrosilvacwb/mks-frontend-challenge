import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from './store';

interface RootState {
  data: IProducts[] | [];
  loading: boolean;
  error: any;
  cart: IProducts[];
}

export const initialState: RootState = {
  data: [],
  loading: false,
  error: null,
  cart: [],
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IProducts[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addCart: (state, action: PayloadAction<IProducts>) => {
      if (!state.cart.find((p) => p.id === action.payload.id)) {
        const product = { ...action.payload, amount: 1 };
        state.cart.push(product);
      } else {
        state.cart.map((prod) => {
          return prod.id === action.payload.id ? prod.amount!++ : prod;
        });
      }
    },
    removeCart: (state, action: PayloadAction<IProducts>) => {
      const product = state.cart.find((prod) => prod.id === action.payload.id);
      if (product?.amount === 1) {
        state.cart = state.cart.filter((prod) => {
          return prod.id !== product?.id ? prod : null;
        });
      } else {
        state.cart.map((prod) =>
          prod.id === product?.id ? (prod.amount! -= 1) : prod,
        );
      }
    },
  },
});

export const { setData, setLoading, setError, addCart, removeCart } =
  slice.actions;

export const reducer = slice.reducer;
