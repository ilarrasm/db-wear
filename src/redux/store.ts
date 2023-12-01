import productSetServices from "@/services/productSetServices/productSetServices";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import appStatusSliceReducer from "./slices/appStatusSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makeStore = () =>
  configureStore({
    reducer: {
      appStatus: appStatusSliceReducer,
      [productSetServices.reducerPath]: productSetServices.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([productSetServices.middleware]),

    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);
// Use throughout your app instead of plain `useDispatch` and `useSelector`
