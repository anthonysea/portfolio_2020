import { createContext, useEffect, useState } from "react"

const defaultState = {
    dark: true,
    toggleDark: () => {}
}

const ThemeContext = createContext(defaultState)

export default ThemeContext;
