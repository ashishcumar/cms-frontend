import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertSlice from "./globleSlices/alertSlice";
import loaderSlice from "./globleSlices/loaderSlice";



export const store = configureStore({
  reducer: {
    alert: alertSlice,
    globalLoader: loaderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
