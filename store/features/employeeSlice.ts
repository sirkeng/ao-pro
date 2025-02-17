// /store/features/employeeSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  fetchEmployeeListMock,
  EmployeeData,
} from "@/lib/mockData/employeeData";

interface EmployeeState {
  list: EmployeeData[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  list: [],
  loading: false,
  error: null,
};

export const getEmployeeList = createAsyncThunk<EmployeeData[]>(
  "employee/getEmployeeList",
  async () => {
    const data = await fetchEmployeeListMock();
    return data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeeList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEmployeeList.fulfilled,
      (state, action: PayloadAction<EmployeeData[]>) => {
        state.loading = false;
        state.list = action.payload;
      }
    );
    builder.addCase(getEmployeeList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching employee list";
    });
  },
});

export default employeeSlice.reducer;

// selectors
export const selectEmployeeList = (state: RootState) => state.employee.list;
export const selectEmployeeLoading = (state: RootState) =>
  state.employee.loading;
export const selectEmployeeError = (state: RootState) => state.employee.error;
