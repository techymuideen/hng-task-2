import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
