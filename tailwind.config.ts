import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Fox theme custom colors
        fox: {
          orange: "hsl(var(--fox-orange))",
          rust: "hsl(var(--fox-rust))",
          cream: "hsl(var(--fox-cream))",
          amber: "hsl(var(--fox-amber))",
        },
        forest: {
          green: "hsl(var(--forest-green))",
          dark: "hsl(var(--forest-dark))",
        },
        bark: "hsl(var(--bark-brown))",
        parchment: "hsl(var(--parchment))",
        golden: "hsl(var(--golden-glow))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'fox': '0 4px 20px -4px hsl(var(--fox-orange) / 0.35)',
        'fox-lg': '0 8px 30px -4px hsl(var(--fox-orange) / 0.45)',
        'cozy': '0 4px 24px -8px hsl(var(--bark-brown) / 0.15)',
        'memory': '0 8px 32px -8px hsl(var(--fox-orange) / 0.2), 0 2px 8px -2px hsl(var(--bark-brown) / 0.1)',
        'memory-hover': '0 16px 48px -12px hsl(var(--fox-orange) / 0.35), 0 4px 16px -4px hsl(var(--bark-brown) / 0.15)',
        'den': 'inset 0 2px 20px hsl(var(--bark-brown) / 0.08)',
      },
      backgroundImage: {
        'fox-gradient': 'linear-gradient(135deg, hsl(var(--fox-orange)), hsl(var(--fox-amber)))',
        'forest-gradient': 'linear-gradient(180deg, hsl(var(--forest-green)), hsl(var(--forest-dark)))',
        'warm-gradient': 'linear-gradient(180deg, hsl(var(--fox-cream)), hsl(var(--parchment)))',
        'den-vignette': 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--bark-brown) / 0.1) 100%)',
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pop-out": {
          "0%": { opacity: "0", transform: "scale(0.5) translateY(20px)" },
          "60%": { transform: "scale(1.1) translateY(-5px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "heart-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "pop-out": "pop-out 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "wiggle": "wiggle 0.5s ease-in-out",
        "heart-beat": "heart-beat 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
