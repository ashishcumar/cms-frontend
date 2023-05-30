import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  isShow: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state: any, action: PayloadAction<any>) => {
      state.isShow = action.payload.isShow;
    },
  },
});
export const isShow = (state: RootState) => state.alert.isShow;
export const message = (state: RootState) => state.alert.message;

export const { setLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
