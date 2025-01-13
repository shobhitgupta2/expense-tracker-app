import colors from "tailwindcss/colors.js";
import theme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "remove-blue": "#3700b3",
      white: "#000000",
    },
  },
  plugins: [],
};
