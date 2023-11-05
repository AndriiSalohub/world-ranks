import { Countries } from "@/models/coutries";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    countries: Countries;
    sortedCountries: Countries;
    sortName: string;
    sortPopulation: string;
    sortArea: string;
    isSorted: boolean;
}

const initialState: IState = {
    countries: [],
    sortedCountries: [],
    sortName: "default",
    sortPopulation: "default",
    sortArea: "default",
    isSorted: false,
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        fetchCountries: (state, action: PayloadAction<Countries>) => {
            state.countries = action.payload;
        },
        // sortFetchedCountries: (state) => {
        //     state.countries = state.countries.sort((a, b) =>
        //         a.name.official > b.name.official ? 1 : -1
        //     );
        // },
        changeNameSort: (state) => {
            switch (state.sortName) {
                case "default":
                    (state.sortedCountries = [...state.countries].sort((a, b) =>
                        a.name.official < b.name.official ? 1 : -1
                    )),
                        (state.sortName = "fromLastLetter");
                    state.isSorted = true;
                    break;
                case "fromLastLetter":
                    (state.sortedCountries = [...state.countries].sort((a, b) =>
                        a.name.official > b.name.official ? 1 : -1
                    )),
                        (state.sortName = "fromFirstLetter");
                    state.isSorted = true;
                    break;
                default:
                    state.isSorted = false;
                    state.sortName = "default";
            }
        },
        changePopulationSort: (state) => {
            switch (state.sortPopulation) {
                case "default":
                    state.sortedCountries = [...state.countries].sort(
                        (a, b) => a.population - b.population
                    );
                    state.sortName = "default";
                    state.sortPopulation = "fromTheGreatest";
                    state.isSorted = true;
                    break;
                case "fromTheGreatest":
                    state.sortedCountries = [...state.countries].sort((a, b) =>
                        a.population - b.population ? -1 : 1
                    );
                    state.sortName = "default";
                    state.sortPopulation = "fromTheLowest";
                    state.isSorted = true;
                    break;
                default:
                    state.isSorted = false;
                    state.sortPopulation = "default";
                    state.sortName = "default";
            }
        },
    },
});

export const { fetchCountries, changeNameSort, changePopulationSort } =
    countriesSlice.actions;
export const countryReducer = countriesSlice.reducer;
