import { createSlice } from "@reduxjs/toolkit";
import { LoadStateTypes } from "@/redux/load/loadStateTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
  loadingMore: false,
  allContentLoaded: false,
};

export const loadSlice = createSlice({
  name: "load",
  initialState: initialState,
  reducers: {
    addMoreData: (state: LoadStateTypes, action) => {
      state.data = [...state.data, ...action.payload];
      state.error = null;
      state.loading = false;
      state.loadingMore = false;
    },
    fetchError: (state: LoadStateTypes, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    loading: (state: LoadStateTypes) => {
      state.error = null;
      state.loading = true;
    },
    allContentLoaded: (state: LoadStateTypes) => {
      state.allContentLoaded = true;
    },
    loadingMore: (state: LoadStateTypes) => {
      state.loadingMore = true;
    },
    reset: () => initialState,
  },
});

export const {
  addMoreData,
  fetchError,
  loading,
  allContentLoaded,
  loadingMore,
} = loadSlice.actions;
export default loadSlice.reducer;
