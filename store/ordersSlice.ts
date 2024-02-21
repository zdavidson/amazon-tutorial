import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface OrdersState {
  orders: any;
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrders: (state, action: PayloadAction<any>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addToOrders } = ordersSlice.actions;

export const selectOrders = (state: RootState) => state.orders.orders;

export default ordersSlice.reducer;
