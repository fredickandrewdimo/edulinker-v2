/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // FONTS
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },

      // COLORS
      colors: {
        // LIGHT MODE
        lightColor: "#FFFFFF",
        darkLightColor: "#F4F4F4",
        mostDarkLightColor: "#E5E7EB",
        textPrimaryLightColor: "#202D36",
        textSecondaryLightColor: "#374654",

        // DARK
        lightDarkColor: "#F4F4F4",
        lightColor: "#FFFFFF",
        textPrimaryDarkColor: "#FFFFFF",
        textSecondaryDarkColor: "#D4D4D4",
      },
    },
  },
  plugins: [],
};
