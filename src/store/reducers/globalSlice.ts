import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  currentChannelTab: number;
}

const initialState: InitialState = {
  isSidebarOpen: true,
  isModalOpen: true,
  currentChannelTab: 0,
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
    setCurrentChannelTab: (state, action) => {
      state.currentChannelTab = action.payload;
    },
  },
});

export const { toggleSidebarState, toggleModalState, setCurrentChannelTab } =
  globalSlice.actions;

export default globalSlice.reducer;
