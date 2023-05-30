import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ALERT_STATE } from "@/Interface/interface";

const initialState: ALERT_STATE = {
  isShow: false,
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state: any, action: PayloadAction<ALERT_STATE>) => {
      state.isShow = action.payload.isShow;
      state.message = action.payload.message;
    },
  },
});
export const isShow = (state: RootState) => state.alert.isShow;
export const message = (state: RootState) => state.alert.message;

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
