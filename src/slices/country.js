import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.countries.push(action.payload);
    },
  },
});

export const { addCountry } = countriesSlice.actions;
export default countriesSlice.reducer;