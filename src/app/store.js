import { configureStore } from "@reduxjs/toolkit";
import partyReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: { party: partyReducer },
});
