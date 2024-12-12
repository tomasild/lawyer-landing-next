/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "azul": {
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cbdcec",
          300: "#9cbedd",
          400: "#689dc8",
          500: "#447fb3",
          600: "#336596",
          700: "#2a527a",
          800: "#244260",
          900: "#243c56",
          950: "#182739",
        },
      },
    },
  },
  plugins: [],
};
