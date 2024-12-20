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
        'primary-light': '#ffffff',
        'primary-dark': '#0a0a0a',
        'secondary-light': '#4a5568',
        'secondary-dark': '#a0aec0',
        'accent-light': '#6366f1',
        'accent-dark': '#818cf8',
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
