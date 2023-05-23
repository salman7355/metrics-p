import { configureStore } from "@reduxjs/toolkit";
import FPSlice from "./FPSlice";

export const Store = configureStore({
  reducer: {
    FP: FPSlice,
  },
});
