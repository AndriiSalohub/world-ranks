import CountriesTable from "@/components/CountriesTable";
import Search from "@/components/Search";
import "@/styles/globals.scss";
import "@/styles/variables.scss";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <main className="main">
                <Search />
                <CountriesTable />
            </main>
        </>
    );
};

export default Home;
