import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        background: {
          DEFAULT: "#0D1117",        // GitHub-style dark background
          secondary: "#161B22",      // Slightly elevated panel background
          accent: "#1F2937",         // Dark grayish blue for cards, sections
        },
        text: {
          DEFAULT: "#F8FAFC",        // Almost-white text for contrast
          muted: "#9CA3AF",          // Soft gray text (Tailwind gray-400)
        },
        primary: {
          DEFAULT: "#3B82F6",        // Tailwind blue-500 (bright and modern)
          light: "#60A5FA",          // Lighter hover state
          dark: "#1E3A8A",           // Navy blue for focus/pressed
        },
        border: {
          DEFAULT: "#2C313A",        // Subtle border for dark themes
        },

        // Design token support
        foreground: "hsl(var(--foreground))",
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
        destructive: {
          DEFAULT: "#EF4444", // Red-500
          foreground: "#FEE2E2", // Red-100
        },
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
