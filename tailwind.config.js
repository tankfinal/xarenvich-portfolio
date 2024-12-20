/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#050816',
        },
        secondary: {
          light: '#666666',
          dark: '#aaa6c3',
        },
        tertiary: {
          light: '#f3f4f6',
          dark: '#151030',
        },
        accent: {
          light: '#2563eb',
          dark: '#915eff',
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [],
}
