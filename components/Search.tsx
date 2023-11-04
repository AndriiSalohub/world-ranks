"use client";

import "@/styles/search.scss";
import { SearchRounded } from "@material-ui/icons";
import { FC } from "react";

const Search: FC = () => {
    return (
        <>
            <section className="search">
                <h1 className="search__title">Found 250 countries</h1>
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
