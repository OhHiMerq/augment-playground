"use client"

import * as React from "react"
import { Button } from "@base-ui/components/ui/button"
import { Card, CardContent } from "@base-ui/components/ui/card"
import { Badge } from "@base-ui/components/ui/badge"

type Theme = "default" | "bee" | "coffee" | "sunshine"
type Mode = "light" | "dark"

interface ThemeConfig {
  name: string
  label: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
  emoji: string
}

const themes: Record<Theme, ThemeConfig> = {
  default: {
    name: "default",
    label: "Default",
    description: "Clean and professional",
    colors: {
      primary: "hsl(221.2 83.2% 53.3%)",
      secondary: "hsl(210 40% 96%)",
      accent: "hsl(210 40% 96%)"
    },
    emoji: "⚡"
  },
  bee: {
    name: "bee",
    label: "Bee",
    description: "Warm yellows and golds",
    colors: {
      primary: "hsl(45 93% 47%)",
      secondary: "hsl(48 100% 88%)",
      accent: "hsl(48 100% 88%)"
    },
    emoji: "🐝"
  },
  coffee: {
    name: "coffee",
    label: "Coffee",
    description: "Rich browns and creams",
    colors: {
      primary: "hsl(25 50% 35%)",
      secondary: "hsl(30 20% 88%)",
      accent: "hsl(30 20% 88%)"
    },
    emoji: "☕"
  },
  sunshine: {
    name: "sunshine",
    label: "Sunshine",
    description: "Bright oranges and yellows",
    colors: {
      primary: "hsl(35 100% 50%)",
      secondary: "hsl(55 100% 88%)",
      accent: "hsl(55 100% 88%)"
    },
    emoji: "☀️"
  }
}

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>("default")
  const [currentMode, setCurrentMode] = React.useState<Mode>("light")

  React.useEffect(() => {
    // Load saved theme and mode
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedMode = localStorage.getItem("mode") as Mode | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || "default"
    const initialMode = savedMode || (prefersDark ? "dark" : "light")

    setCurrentTheme(initialTheme)
    setCurrentMode(initialMode)
    applyTheme(initialTheme, initialMode)
  }, [])

  const applyTheme = (theme: Theme, mode: Mode) => {
    const root = document.documentElement
    
    // Remove all theme classes
    root.classList.remove("theme-bee", "theme-coffee", "theme-sunshine", "dark")
    
    // Apply new theme class
    if (theme !== "default") {
      root.classList.add(`theme-${theme}`)
    }
    
    // Apply mode
    if (mode === "dark") {
      root.classList.add("dark")
    }
  }

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme)
    localStorage.setItem("theme", theme)
    applyTheme(theme, currentMode)
  }

  const handleModeToggle = () => {
    const newMode = currentMode === "light" ? "dark" : "light"
    setCurrentMode(newMode)
    localStorage.setItem("mode", newMode)
    applyTheme(currentTheme, newMode)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Theme Selector</h2>
            <p className="text-muted-foreground">
              Choose your preferred theme and mode
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm font-medium">Mode:</span>
            <Button
              variant="outline"
              onClick={handleModeToggle}
              className="w-24"
            >
              {currentMode === "light" ? (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Light
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark
                </>
              )}
            </Button>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(themes).map(([key, theme]) => (
              <div
                key={key}
                className={`relative cursor-pointer transition-all duration-200 ${
                  currentTheme === key
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "hover:scale-105"
                }`}
                onClick={() => handleThemeChange(key as Theme)}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-4 space-y-3">
                    {/* Theme Preview */}
                    <div className="h-16 rounded-md overflow-hidden flex">
                      <div 
                        className="flex-1" 
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                      <div 
                        className="flex-1" 
                        style={{ backgroundColor: theme.colors.secondary }}
                      />
                      <div 
                        className="flex-1" 
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                    </div>

                    {/* Theme Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold flex items-center gap-2">
                          <span className="text-lg">{theme.emoji}</span>
                          {theme.label}
                        </h3>
                        {currentTheme === key && (
                          <Badge variant="default" className="text-xs">
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {theme.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Current Selection */}
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Current theme: <span className="font-semibold text-foreground">
                {themes[currentTheme].emoji} {themes[currentTheme].label} ({currentMode})
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}