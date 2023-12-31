import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
}

const initialState: InitialState = {
  isSidebarOpen: true,
  isModalOpen: true,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    toggleSidebarState: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleModalState: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleSidebarState, toggleModalState } = globalSlice.actions;

export default globalSlice.reducer;
