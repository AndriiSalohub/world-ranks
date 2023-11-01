"use client";

import { useCountries } from "@/store/store";
import "@/styles/search.scss";
import { SearchRounded } from "@material-ui/icons";
import { FC, useEffect } from "react";

const Search: FC = () => {
    const setCountries = useCountries((state) => state.setCountries);
    const countries = useCountries((state) => state.countries);

    useEffect(() => {
        const getCounties = async () => {
            const countries = await (
                await fetch("https://restcountries.com/v3.1/all")
            ).json();

            setCountries(countries);
        };

        getCounties();
        console.log(countries);
    }, []);

    return (
        <>
            <section className="search">
                <h1 className="search__title">
                    Found {countries.length} countries
                </h1>
                <div className="search__wrapper">
                    <SearchRounded color="inherit" />
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Filter by Name, Region or Subregion"
                    />
                </div>
            </section>
        </>
    );
};

export default Search;
