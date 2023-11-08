import { Countries } from "@/models/countries";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    countries: Countries;
    orderedCountries: Countries;
    direction: string;
    value: string;
}

const initialState: IState = {
    countries: [],
    orderedCountries: [],
    direction: "",
    value: "",
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
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) =>
                                a.name.official > b.name.official ? 1 : -1
                        );
                        state.value = "name";
                        break;
                    case "population":
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) => (a.population > b.population ? 1 : -1)
                        );
                        state.value = "population";
                        break;
                    case "area":
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) => (a.area > b.area ? 1 : -1)
                        );
                        state.value = "area";
                        break;
                    default:
                        state.orderedCountries = [...state.countries];
                }
            } else if (action.payload[0] === "descent") {
                state.direction = "descent";
                switch (action.payload[1]) {
                    case "name":
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) =>
                                a.name.official > b.name.official ? -1 : 1
                        );
                        state.value = "name";
                        break;
                    case "population":
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) => (a.population > b.population ? -1 : 1)
                        );
                        state.value = "population";
                        break;
                    case "area":
                        state.orderedCountries = [...state.countries].sort(
                            (a, b) => (a.area > b.area ? -1 : 1)
                        );
                        state.value = "area";
                        break;
                    default:
                        state.orderedCountries = [...state.countries];
                }
            } else {
                state.direction = "";
                state.value = "";
                state.orderedCountries = [...state.countries];
            }
        },
    },
});

export const { fetchCountries, orderCountries } = countriesSlice.actions;
export const countryReducer = countriesSlice.reducer;
