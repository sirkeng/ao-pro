// /store/features/caseSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { fetchCaseListMock, CaseData } from "@/lib/mockData/caseData";

interface CaseState {
  list: CaseData[];
  loading: boolean;
  error: string | null;
}

const initialState: CaseState = {
  list: [],
  loading: false,
  error: null,
};

// จำลองการ fetch case list
export const getCaseList = createAsyncThunk<CaseData[]>(
  "case/getCaseList",
  async () => {
    const data = await fetchCaseListMock(); // mock
    return data;
  }
);

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCaseList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCaseList.fulfilled,
      (state, action: PayloadAction<CaseData[]>) => {
        state.loading = false;
        state.list = action.payload;
      }
    );
    builder.addCase(getCaseList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching case list";
    });
  },
});

export default caseSlice.reducer;

// selectors
export const selectCaseList = (state: RootState) => state.case.list;
export const selectCaseLoading = (state: RootState) => state.case.loading;
export const selectCaseError = (state: RootState) => state.case.error;
