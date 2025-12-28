import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Color Palette - "Midnight Authority"
        navy: {
          950: "#0a0f1a",
          900: "#0f1629",
          800: "#1a2744",
          700: "#253a5f",
          600: "#334e7a",
          500: "#4a6fa5",
        },
        ivory: {
          50: "#fafaf8",
          100: "#f5f5f0",
          200: "#ebe9e1",
          300: "#d4d1c4",
        },
        gold: {
          400: "#d4a853",
          500: "#c4963f",
          600: "#a67c2a",
        },
        slate: {
          900: "#1a1a1f",
          800: "#2d2d33",
          700: "#3d3d44",
          600: "#52525b",
          500: "#6b6b73",
          400: "#9ca3af",
          300: "#b8b8bf",
          200: "#e5e5e7",
        },
        // Four Pillars Colors
        emerald: {
          500: "#10b981",
          400: "#34d399",
        },
        amber: {
          500: "#f59e0b",
          400: "#fbbf24",
        },
        sapphire: {
          500: "#3b82f6",
          400: "#60a5fa",
        },
        ruby: {
          500: "#ef4444",
          400: "#f87171",
        },
        // Legacy mappings (backwards compatibility)
        primary: "#0f1629",
        "primary-dark": "#0a0f1a",
        "primary-light": "#1a2744",
        secondary: "#fafaf8",
        text: "#1a1a1f",
        "text-light": "#6b6b73",
        // System colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        "7xl": ["5rem", { lineHeight: "1.1" }],
        "6xl": ["4rem", { lineHeight: "1.1" }],
        "5xl": ["3.2rem", { lineHeight: "1.15" }],
        "4xl": ["2.56rem", { lineHeight: "1.2" }],
        "3xl": ["2.048rem", { lineHeight: "1.25" }],
        "2xl": ["1.64rem", { lineHeight: "1.3" }],
        xl: ["1.31rem", { lineHeight: "1.4" }],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "premium-sm": "0 1px 2px rgba(26, 26, 31, 0.04), 0 1px 3px rgba(26, 26, 31, 0.06)",
        "premium-md": "0 2px 4px rgba(26, 26, 31, 0.04), 0 4px 8px rgba(26, 26, 31, 0.06), 0 8px 16px rgba(26, 26, 31, 0.04)",
        "premium-lg": "0 4px 8px rgba(26, 26, 31, 0.04), 0 8px 16px rgba(26, 26, 31, 0.06), 0 16px 32px rgba(26, 26, 31, 0.08)",
        "premium-xl": "0 8px 16px rgba(26, 26, 31, 0.06), 0 16px 32px rgba(26, 26, 31, 0.08), 0 32px 64px rgba(26, 26, 31, 0.1)",
        "gold-glow": "0 4px 16px rgba(212, 168, 83, 0.2), 0 8px 32px rgba(212, 168, 83, 0.15)",
        "gold-glow-lg": "0 8px 24px rgba(212, 168, 83, 0.25), 0 16px 48px rgba(212, 168, 83, 0.2)",
        card: "0 1px 3px rgba(26, 26, 31, 0.05), 0 4px 12px rgba(26, 26, 31, 0.08)",
        "card-hover": "0 4px 8px rgba(26, 26, 31, 0.06), 0 12px 24px rgba(26, 26, 31, 0.1), 0 24px 48px rgba(26, 26, 31, 0.08)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0f1629 0%, #1a2744 50%, #253a5f 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4a853 0%, #c4963f 100%)",
        "gradient-card-dark": "linear-gradient(135deg, rgba(26, 39, 68, 0.95) 0%, rgba(15, 22, 41, 0.9) 100%)",
        "gradient-card-light": "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 248, 0.9) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 83, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 168, 83, 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out-expo": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
}
export default config
