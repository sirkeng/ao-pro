// /store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import caseReducer from "./features/caseSlice";
import employeeReducer from "./features/employeeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    case: caseReducer,
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
