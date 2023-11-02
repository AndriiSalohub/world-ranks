"use client";
import { useCountries } from "@/store/store";
import "@/styles/coutries-table.scss";
import { FC } from "react";

const CountriesTable: FC = () => {
    const countries = useCountries((state) => state.countries);
    console.log(countries);
    return (
        <section className="countries-table">
            <button className="countries-table__buttons">
                <p className="countries-table__buttons_name">Name</p>
            </button>
            <button className="countries-table__buttons">
                <p className="countries-table__buttons_population">
                    Population
                </p>
            </button>
            <ul className="countries-table__list">
                {countries.map((country) => (
                    <li className="countries-table__list__item">
                        <p className="countries-table__list__item-name">
                            {country.name.common}
                        </p>
                        <p className="countries-table__list__item-population">
                            {country.population}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CountriesTable;
