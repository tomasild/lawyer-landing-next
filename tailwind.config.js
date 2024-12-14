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
        azul: {
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
        'otis': {
        '50': '#fbf4f8',
        '100': '#f9eaf4',
        '200': '#f4d6e9',
        '300': '#ecb5d6',
        '400': '#e086ba',
        '500': '#d262a0',
        '600': '#b53e7a',
        '700': '#a43268',
        '800': '#882c56',
        '900': '#72294a',
        '950': '#451229',
    },
      },
      backgroundImage: {
        'custom-bg': "url('/bg1.webp')",
      },
    },
  },
  plugins: [],
};
