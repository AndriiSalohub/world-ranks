import { Countries } from "@/models/countries";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    countries: Countries;
    orderedCountries: Countries;
    direction: string;
    value: string;
    searchVal: string;
}

const initialState: IState = {
    countries: [],
    orderedCountries: [],
    direction: "",
    value: "",
    searchVal: "",
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        fetchCountries: (state, action: PayloadAction<Countries>) => {
            state.countries = action.payload;
            state.orderedCountries = action.payload;
        },
        orderCountries: (
            state,
            action: PayloadAction<
                ["descent" | "ascent" | "", "name" | "population" | "area"]
            >
        ) => {
            if (action.payload[0] === "ascent") {
                state.direction = "ascent";
                switch (action.payload[1]) {
                    case "name":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) =>
                            a.name.official > b.name.official ? 1 : -1
                        );
                        state.value = "name";
                        break;
                    case "population":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) =>
                            a.population > b.population ? 1 : -1
                        );
                        state.value = "population";
                        break;
                    case "area":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) => (a.area > b.area ? 1 : -1));
                        state.value = "area";
                        break;
                    default:
                        state.orderedCountries = [...state.orderedCountries];
                }
            } else if (action.payload[0] === "descent") {
                state.direction = "descent";
                switch (action.payload[1]) {
                    case "name":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) =>
                            a.name.official > b.name.official ? -1 : 1
                        );
                        state.value = "name";
                        break;
                    case "population":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) =>
                            a.population > b.population ? -1 : 1
                        );
                        state.value = "population";
                        break;
                    case "area":
                        state.orderedCountries = [
                            ...state.orderedCountries,
                        ].sort((a, b) => (a.area > b.area ? -1 : 1));
                        state.value = "area";
                        break;
                    default:
                        state.orderedCountries = [...state.orderedCountries];
                }
            } else {
                state.direction = "";
                state.value = "";
                if (state.searchVal !== "") {
                    state.orderedCountries = [
                        ...state.countries.filter((country) => {
                            for (
                                let i = 0;
                                i < state.orderedCountries.length;
                                i++
                            ) {
                                if (
                                    country.name.official ===
                                    state.orderedCountries[i].name.official
                                ) {
                                    return country;
                                }
                            }
                        }),
                    ];
                } else {
                    state.orderedCountries = [...state.countries];
                }
            }
        },
        search: (state, action: PayloadAction<string>) => {
            state.searchVal = action.payload;
            state.orderedCountries = state.countries.filter(
                (country) =>
                    country.name.official
                        .toLowerCase()
                        .includes(action.payload) ||
                    country.region.toLocaleLowerCase().includes(action.payload)
            );
        },
    },
});

export const { fetchCountries, orderCountries, search } =
    countriesSlice.actions;
export const countryReducer = countriesSlice.reducer;
