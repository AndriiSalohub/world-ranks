"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit";
import { search } from "@/redux-toolkit/slices/countrySlice";
import "@/styles/search.scss";
import { FC } from "react";

const Search: FC = () => {
    const dispatch = useAppDispatch();
    const countries = useAppSelector((state) => state.countries.countries);
    return (
        <>
            <section className="search">
                <h1 className="search__title">
                    Found {countries.length} countries
                </h1>
                <div className="search__wrapper">
                    <img
                        src="https://i.ibb.co/0nyxWXQ/search-1.png"
                        alt="search loop"
                    />
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Filter by Name, Region or Subregion"
                        onChange={(e) =>
                            dispatch(search(e.target.value.toLowerCase()))
                        }
                    />
                </div>
            </section>
        </>
    );
};

export default Search;
