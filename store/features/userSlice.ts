// /store/features/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserRole =
  | "ao"
  | "assistant"
  | "deputy"
  | "manager"
  | "senior"
  | "guest";

interface UserState {
  username: string;
  role: UserRole;
}

const initialState: UserState = {
  username: "",
  role: "guest",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; role: UserRole }>
    ) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.username = "";
      state.role = "guest";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
