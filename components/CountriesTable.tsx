"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";

import { useGetAllCountriesQuery } from "@/redux-toolkit/slices/countryApi";
import {
    changeNameSort,
    fetchCountries,
    sortFetchedCountries,
} from "@/redux-toolkit/slices/countrySlice";
import "@/styles/countries-table.scss";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { FC, useEffect } from "react";
import Table from "./Table";

const CountriesTable: FC = () => {
    const dispatch = useAppDispatch();
    const { data, isLoading, isError } = useGetAllCountriesQuery(0);
    const nameSort = useAppSelector((state) => state.countries.sortName);
    useEffect(() => {
        dispatch(fetchCountries(data || []));
        dispatch(sortFetchedCountries());
    }, [data]);

    return (
        <section className="countries-table">
            <div className="countries-table__buttons">
                <button className="countries-table__button">
                    <p
                        className="countries-table__button_name"
                        onClick={() => dispatch(changeNameSort())}
                    >
                        Name
                    </p>
                    <div className="countries-table__button_icon">
                        {nameSort === "default" ? null : nameSort ===
                          "fromLastLetter" ? (
                            <KeyboardArrowDown color="inherit" />
                        ) : (
                            <KeyboardArrowUp color="inherit" />
                        )}
                    </div>
                </button>
                <button className="countries-table__button">
                    <p className="countries-table__buttons_population">
                        Population
                    </p>
                </button>
                <button className="countries-table__button">
                    <p className="countries-table__buttons_area">Area(km^2)</p>
                </button>
            </div>
            {isError ? <h2>Ops...Something went wrong</h2> : <Table />}
            {isLoading ? <h2>Loading...</h2> : <Table />}
        </section>
    );
};

export default CountriesTable;
