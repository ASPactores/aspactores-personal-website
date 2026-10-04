'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 opacity-0 ${className}`}
        aria-hidden="true"
      />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 text-primary-100 hover:text-accent-400 hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-md ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-200 rotate-0 scale-100" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-200 rotate-0 scale-100" />
        )}
      </div>
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  )
}
