"use client";
import CountryInfo from "@/components/CountryInfo";
import { useGetSingleCountryQuery } from "@/redux-toolkit/slices/countryApi";
import "@/styles/globals.scss";
import "@/styles/variables.scss";
import { FC } from "react";

interface IProps {
    params: {
        name: string;
    };
}

const Country: FC<IProps> = ({ params }) => {
    const { data, isLoading, isError } = useGetSingleCountryQuery(params.name);
    return (
        <>
            <main className="main">
                {" "}
                {isError ? <h2>Ops...Something went wrong</h2> : null}
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <CountryInfo country={data || []} />
                )}
            </main>
        </>
    );
};

export default Country;
