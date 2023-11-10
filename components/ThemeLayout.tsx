"use client";

import { useAppDispatch } from "@/hooks/redux-toolkit";
import { setTheme } from "@/redux-toolkit/slices/themeSlice";
import { Brightness6Rounded } from "@material-ui/icons";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const ThemeLayout: FC<IProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <button
                className="theme-switcher"
                onClick={() => dispatch(setTheme())}
            >
                <Brightness6Rounded />
            </button>
            {children}
        </>
    );
};

export default ThemeLayout;
