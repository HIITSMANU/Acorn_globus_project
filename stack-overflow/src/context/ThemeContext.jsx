import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, settheme] = useState("light")

    const toggletheme = () => {
        settheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)