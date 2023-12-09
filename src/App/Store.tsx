import { configureStore } from "@reduxjs/toolkit";
import Page1Reducer from "../Features/CreateSlice"; //page1 is key Reducer is fix
import page2Reducer from "../Features/ReadSlice"

export const store = configureStore({
  reducer: {
    page1:Page1Reducer,
    page2:page2Reducer,
  },
});