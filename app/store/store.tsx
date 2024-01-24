import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducer";

export const store = configureStore({
  reducer: {
    logins: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
