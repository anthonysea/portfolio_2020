import { createContext, useEffect, useState } from "react"

const defaultState = {
    dark: true,
    toggleDark: () => {}
}

const ThemeContext = createContext(defaultState)

const supportsDarkMode = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
}

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true)

    const toggleDark = () => {
        localStorage.setItem("dark",  JSON.stringify(!dark))
        setDark(!dark)
    }

    useEffect(() => {
        const tmpDark = JSON.parse(localStorage.getItem("dark"))

        if (tmpDark === false) {
            setDark(tmpDark)
        } else if (supportsDarkMode()) {
            setDark(true)
        }
    }, [])

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggleDark
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
