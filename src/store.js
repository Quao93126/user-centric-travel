import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import countriesReducer from "./slices/country";

const allReducer = {
  auth: authReducer,
  message: messageReducer,
  countries: countriesReducer,
}

const store = configureStore({
  reducer: allReducer,
  devTools: true,
})

export default store;
