import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducer";
import sessionReducer from "./sessionReducer";

export const store = configureStore({
  reducer: {
    logins: loginReducer,
    sessions: sessionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
