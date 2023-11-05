import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./slices/countryApi";
import { countryReducer } from "./slices/countrySlice";

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
        countries: countryReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
