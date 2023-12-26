import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isSidebarOpen: boolean;
}

const initialState: InitialState = {
  isSidebarOpen: true,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setSidebarState: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setSidebarState } = globalSlice.actions;

export default globalSlice.reducer;
