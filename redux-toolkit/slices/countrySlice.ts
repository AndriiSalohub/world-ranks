import { Countries } from "@/models/coutries";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    countries: Countries;
    sortName: string;
    sortPopulation: string;
    sortArea: string;
}

const initialState: IState = {
    countries: [],
    sortName: "default",
    sortPopulation: "default",
    sortArea: "default",
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        fetchCountries: (state, action: PayloadAction<Countries>) => {
            state.countries = action.payload;
        },
        sortFetchedCountries: (state) => {
            state.countries = state.countries.sort((a, b) =>
                a.name.official > b.name.official ? 1 : -1
            );
        },
        changeNameSort: (state) => {
            switch (state.sortName) {
                case "default":
                    state.countries = state.countries.sort((a, b) =>
                        a.name.official < b.name.official ? 1 : -1
                    );
                    state.sortName = "fromLastLetter";
                    break;
                case "fromLastLetter":
                    state.countries = state.countries.sort((a, b) =>
                        a.name.official > b.name.official ? 1 : -1
                    );
                    state.sortName = "fromFirstLetter";
                    break;
                default:
                    state.sortName = "default";
            }
        },
    },
});

export const { fetchCountries, sortFetchedCountries, changeNameSort } =
    countriesSlice.actions;
export const countryReducer = countriesSlice.reducer;
