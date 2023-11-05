"use client";

import { useAppSelector } from "@/hooks/redux-toolkit";
import { Country } from "@/models/coutries";

const Table = () => {
    const { countries, sortedCountries, isSorted } = useAppSelector(
        (state) => state.countries
    );

    console.log(countries);
    return (
        <ul className="countries-table__list">
            {isSorted
                ? sortedCountries?.map((country: Country) => (
                      <li
                          className="countries-table__list__item"
                          key={country.name.common}
                      >
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
                  ))
                : countries?.map((country: Country) => (
                      <li
                          className="countries-table__list__item"
                          key={country.name.common}
                      >
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
                  ))}
        </ul>
    );
};

export default Table;
