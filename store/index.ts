import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ordersSlice from "./ordersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedOrdersReducer = persistReducer(persistConfig, ordersSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    orders: persistedOrdersReducer,
  },
});

export const persistedStore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
