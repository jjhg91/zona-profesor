import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "redux/api/auth";
// import { coinApi } from "redux/api/coin";
// import { productApi } from "redux/api/product";

export const store = configureStore({
  reducer: {
    //   [authApi.reducerPath]: authApi.reducer,
    //   [productApi.reducerPath]: productApi.reducer,
    //   [coinApi.reducerPath]: coinApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // authApi.middleware,
      // productApi.middleware,
      // coinApi.middleware,
    ]),
});
