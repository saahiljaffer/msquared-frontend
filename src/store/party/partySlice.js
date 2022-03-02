/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const partySlice = createSlice({
  name: "party",
  initialState: { hasLoaded: false },
  reducers: {
    setChosenParty: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const { payload } = action;
      state.details = payload;
      state.hasLoaded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChosenParty } = partySlice.actions;

export default partySlice.reducer;
