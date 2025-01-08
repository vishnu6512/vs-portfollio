'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get saved theme or use system preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(savedTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Save theme preference
    localStorage.setItem('theme', theme)
    
    // Remove both classes first
    document.documentElement.classList.remove('dark', 'light')
    // Add the current theme class
    document.documentElement.classList.add(theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

