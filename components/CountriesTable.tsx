"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";

import { useGetAllCountriesQuery } from "@/redux-toolkit/slices/countryApi";
import {
    fetchCountries,
    orderCountries,
} from "@/redux-toolkit/slices/countrySlice";
import "@/styles/countries-table.scss";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { FC, useEffect } from "react";
import Table from "./Table";

const CountriesTable: FC = () => {
    const dispatch = useAppDispatch();
    const { direction, value } = useAppSelector((state) => state.countries);
    const { data, isLoading, isError } = useGetAllCountriesQuery(0);
    useEffect(() => {
        dispatch(fetchCountries(data || []));
    }, [data]);

    return (
        <section className="countries-table">
            <div className="countries-table__buttons">
                <button
                    className="countries-table__button"
                    onClick={() =>
                        dispatch(
                            orderCountries([
                                direction === ""
                                    ? "ascent"
                                    : direction === "ascent"
                                    ? "descent"
                                    : "",
                                "name",
                            ])
                        )
                    }
                >
                    <p className="countries-table__button_name">Name</p>
                    <div className="countries-table__button_icon">
                        {value === "name" ? (
                            direction === "ascent" ? (
                                <KeyboardArrowDown color="inherit" />
                            ) : direction === "descent" ? (
                                <KeyboardArrowUp color="inherit" />
                            ) : null
                        ) : null}
                    </div>
                </button>
                <button
                    className="countries-table__button"
                    onClick={() =>
                        dispatch(
                            orderCountries([
                                direction === ""
                                    ? "ascent"
                                    : direction === "ascent"
                                    ? "descent"
                                    : "",
                                "population",
                            ])
                        )
                    }
                >
                    <p className="countries-table__buttons_population">
                        Population
                    </p>
                    <div className="countries-table__button_icon">
                        {value === "population" ? (
                            direction === "ascent" ? (
                                <KeyboardArrowDown color="inherit" />
                            ) : direction === "descent" ? (
                                <KeyboardArrowUp color="inherit" />
                            ) : null
                        ) : null}
                    </div>
                </button>
                <button
                    className="countries-table__button"
                    onClick={() =>
                        dispatch(
                            orderCountries([
                                direction === ""
                                    ? "ascent"
                                    : direction === "ascent"
                                    ? "descent"
                                    : "",
                                "area",
                            ])
                        )
                    }
                >
                    <p className="countries-table__buttons_area">Area(km^2)</p>
                    <div className="countries-table__button_icon">
                        {value === "area" ? (
                            direction === "ascent" ? (
                                <KeyboardArrowDown color="inherit" />
                            ) : direction === "descent" ? (
                                <KeyboardArrowUp color="inherit" />
                            ) : null
                        ) : null}
                    </div>
                </button>
            </div>
            {isError ? <h2>Ops...Something went wrong</h2> : null}
            {isLoading ? <h2>Loading...</h2> : <Table />}
        </section>
    );
};

export default CountriesTable;
