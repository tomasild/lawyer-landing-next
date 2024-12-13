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
        verde: {
          50: '#f1fcf5',
          100: '#defaea',
          200: '#bef4d4',
          300: '#8ce9b3',
          400: '#52d68a',
          500: '#2bbc68',
          600: '#1e9b53',
          700: '#1b7a44',
          800: '#1a6139',
          900: '#184f31',
          950: '#072c18',
        },
      },
      backgroundImage: {
        'custom-bg': "url('/bg1.webp')",
      },
    },
  },
  plugins: [],
};
