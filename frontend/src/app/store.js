import { configureStore } from "@reduxjs/toolkit";
import fooReducer from "../features/foo/fooSlice";

export const store = configureStore({
  reducer: { foo: fooReducer },
});
