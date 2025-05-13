"use client"

import type React from "react"

import { createContext, useContext, useState, type ReactNode } from "react"

// Define the shape of our theme context
interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext)

// Provider component for the theme context
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}
