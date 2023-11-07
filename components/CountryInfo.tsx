import { Country } from "@/models/countries";
import "@/styles/country-info.scss";
import { FC } from "react";

interface IProps {
    country: Country[];
}

const CountryInfo: FC<IProps> = ({ country }) => {
    return (
        <section className="country-info">
            <div className="country-info__basic">
                <img
                    src={country[0].flags?.png}
                    alt={country[0].flags?.alt}
                    className="country-info__basic__image"
                />
                <h2 className="country-info__basic__name">
                    {country[0].name?.official}
                </h2>
                <h4 className="country-info__basic__region">
                    {country[0].region}
                </h4>
                <div className="country-info__basic__wrapper">
                    <div className="country-info__basic__name__container">
                        <p className="country-info__basic__name__container__population-number">
                            {country[0].population}
                        </p>
                        <p className="country-info__basic__name__container__population-title country-info__basic__container_title">
                            Population
                        </p>
                    </div>
                    <div className="country-info__basic__name__container">
                        <p className="country-info__basic__name__container__area-number">
                            {country[0].area}
                        </p>
                        <p className="country-info__basic__name__container__population-title country-info__basic__container_title">
                            Area
                        </p>
                    </div>
                </div>
            </div>
            <div className="country-info__detailed">
                <h2 className="country-info__detailed__title">Details</h2>
                <ul className="country-info__detailed__list">
                    <li className="country-info__detailed__list__item">
                        <p className="country-info__detailed__list__item_title">
                            Capital
                        </p>
                        <p className="country-info__detailed__list__item_info">
                            {country[0].capital}
                        </p>
                    </li>
                    <li className="country-info__detailed__list__item">
                        <p className="country-info__detailed__list__item_title">
                            Languages
                        </p>
                        <p className="country-info__detailed__list__item_info">
                            {Object.values(country[0].languages || {}).join(
                                ", "
                            )}
                        </p>
                    </li>
                    <li className="country-info__detailed__list__item">
                        <p className="country-info__detailed__list__item_title">
                            Currencies
                        </p>
                        <p className="country-info__detailed__list__item_info">
                            {Object.values(country[0].currencies || {})
                                .map(({ name }) => name)
                                .join(", ")}
                        </p>
                    </li>
                    <li className="country-info__detailed__list__item">
                        <p className="country-info__detailed__list__item_title">
                            Native name
                        </p>
                        <p className="country-info__detailed__list__item_info">
                            {
                                Object.values(
                                    country[0].name.nativeName || []
                                )[0].official
                            }
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CountryInfo;
