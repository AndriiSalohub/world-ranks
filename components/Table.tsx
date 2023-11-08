"use client";

import { useAppSelector } from "@/hooks/redux-toolkit";
import { Country } from "@/models/countries";
import Link from "next/link";

const Table = () => {
    const { orderedCountries } = useAppSelector((state) => state.countries);

    return (
        <ul className="countries-table__list">
            {" "}
            {orderedCountries.map((country: Country) => (
                <Link
                    href={`/country/${country.name.official}`}
                    key={country.name.common}
                >
                    <li className="countries-table__list__item">
                        <div className="countries-table__list__item_description">
                            <img
                                src={country.flags.png}
                                alt={country.flags.alt}
                                className="countries-table__list__item_flag-img"
                            />
                            <p className="countries-table__list__item_name">
                                {" "}
                                {country.name.official}
                            </p>
                        </div>
                        <p className="countries-table__list__item_population">
                            {country.population}
                        </p>
                        <p className="countries-table__list__item_area">
                            {country.area}
                        </p>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default Table;
