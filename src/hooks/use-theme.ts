import React from 'react'

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saveTheme = localStorage.getItem('theme')
      if (saveTheme) return saveTheme === 'dark'

      return window.matchMedia('(prefers-color-schema: dark)').matches
    }

    return false
  })

  React.useEffect(() => {
    const root = window.document.documentElement

    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  function toggleTheme() {
    setIsDarkMode((prev) => !prev)
  }

  return { isDarkMode, setIsDarkMode, toggleTheme }
}
