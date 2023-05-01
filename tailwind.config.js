/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        darkSemiBlue: "#202D36",
        lightSemiBlue: "#2B3743",
        darkWhite: "#F4F4F4",
        lightWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
