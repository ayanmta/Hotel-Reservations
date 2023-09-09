import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export default configureStore({
  reducer: {
    hound: counterReducer,
  },
});
