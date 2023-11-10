import { createSlice } from "@reduxjs/toolkit";

interface IState {
    theme: "light" | "dark";
}

const initialState = {
    theme: "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state) => {
            if (state.theme === "light") {
                document.documentElement.setAttribute("data-theme", "dark");
                state.theme = "dark";
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                state.theme = "light";
            }
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
