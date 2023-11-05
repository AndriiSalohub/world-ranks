import { Countries } from "@/models/coutries";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
    reducerPath: "coutryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/",
    }),
    endpoints: (build) => ({
        getAllCountries: build.query<Countries, number>({
            query: () => ({
                url: `all`,
            }),
        }),
    }),
});

export const { useGetAllCountriesQuery } = countryApi;
