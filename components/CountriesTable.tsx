"use client";
import { useCountries } from "@/store/store";
import "@/styles/countries-table.scss";
import { FC } from "react";

const CountriesTable: FC = () => {
    const countries = useCountries((state) => state.countries);
    console.log(countries);

    return (
        <section className="countries-table">
            <div className="countries-table__buttons">
                <button className="countries-table__button">
                    <p className="countries-table__button_name">Name</p>
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
            <ul className="countries-table__list">
                {countries.map((country) => (
                    <li
                        className="countries-table__list__item"
                        key={country.name.common}
                    >
                        <p className="countries-table__list__item_description">
                            <img
                                src={country.flags.png}
                                alt={country.flags.alt}
                                className="countries-table__list__item_flag-img"
                            />
                            <p className="countries-table__list__item_name">
                                {" "}
                                {country.name.official}
                            </p>
                        </p>
                        <p className="countries-table__list__item_population">
                            {country.population}
                        </p>
                        <p className="countries-table__list__item_area">
                            {country.area}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CountriesTable;
