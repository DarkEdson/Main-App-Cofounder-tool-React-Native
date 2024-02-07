import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./reducer";
import sessionReducer from "./sessionReducer";
import articleReducer from "./articleReducer";

export const store = configureStore({
  reducer: {
    logins: loginReducer,
    sessions: sessionReducer,
    articles: articleReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
