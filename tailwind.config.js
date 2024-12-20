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
        'accent-light': '#3B82F6', // Blue-500
        'accent-dark': '#60A5FA',  // Blue-400
        'primary-light': '#FFFFFF',
        'primary-dark': '#111827', // Gray-900
        'secondary-light': '#4B5563', // Gray-600
        'secondary-dark': '#9CA3AF',  // Gray-400
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
