import { configureStore } from "@reduxjs/toolkit";
import partyReducer from "../store/party/partySlice";

export default configureStore({
  reducer: { party: partyReducer },
});
