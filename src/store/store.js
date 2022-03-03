import { configureStore } from "@reduxjs/toolkit";
import partyReducer from "./partySlice";

export default configureStore({
  reducer: { party: partyReducer },
});
