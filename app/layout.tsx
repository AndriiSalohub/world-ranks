import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReduxToolkitProvide from "@/redux-toolkit/provider";
import "@/styles/reset.scss";
import "@/styles/variables.scss";
import type { Metadata } from "next";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "World Ranks",
    description:
        "World Ranks is your one-stop destination for comprehensive information about every country on the planet. Explore our extensive database to discover details about each country, including its geographical size, name, population, language, and much more. Whether you're a traveler, a student, or just curious about the world, World Ranks provides you with a wealth of knowledge to satisfy your curiosity and help you make informed decisions. Start your journey of exploration today with World Ranks!",
};

const RootLayout: FC<IProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                <ReduxToolkitProvide>{children}</ReduxToolkitProvide>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
