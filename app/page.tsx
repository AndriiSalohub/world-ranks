import CountriesTable from "@/components/CountriesTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";
import "@/styles/globals.scss";
import "@/styles/variables.scss";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Search />
                <CountriesTable />
            </main>
            <Footer />
        </>
    );
};

export default Home;
