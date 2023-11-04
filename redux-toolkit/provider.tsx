"use client";

import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface IProps {
    children: ReactNode;
}

const ReduxToolkitProvide: FC<IProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxToolkitProvide;
