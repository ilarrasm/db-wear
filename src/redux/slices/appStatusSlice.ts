import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface AppStatusProps {
  isMobile: boolean;
}

const initialState: AppStatusProps = {
  isMobile: true,
};

const appStatus = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    chageIsMobile: (
      state,
      { payload }: { payload: { isMobile: boolean } }
    ) => ({
      ...state,
      isMobile: payload.isMobile,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      isMobile: payload.appStatus.isMobile,
    }),
  },
});

export const { chageIsMobile } = appStatus.actions;
export default appStatus.reducer;
