import { createContext } from "react";
import { Theme } from "../Theme";
import { ThemeContextProviderType } from "../../../type/abstraction/ThemeType";

export const ThemeContext = createContext(Theme);

export const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
    return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
}