import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from '@supabase/supabase-js'

interface isSession {
  value: Session | null;
}

const initialState: isSession = {
  value: null,
};

const sessionSlice = createSlice({
  name: "Session",
  initialState,
  reducers: {
    sessionAdd: (state, action: PayloadAction<Session | null>) => {
      state.value = action.payload;
    },
    sessionRemove: (state) => {
      state.value = null;
    },
  },
});

export const { sessionAdd, sessionRemove } = sessionSlice.actions;
export default sessionSlice.reducer;
