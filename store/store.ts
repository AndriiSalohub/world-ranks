import { Countries } from "@/models/coutries";
import { create } from "zustand";

interface IState {
    countries: Countries;
    setCountries: (countries: Countries) => void;
}

export const useCountries = create<IState>()((set) => ({
    countries: [],
    setCountries: (countries) =>
        set(() => ({
            countries: [...countries],
        })),
}));
