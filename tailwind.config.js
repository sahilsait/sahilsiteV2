/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#224193",
        secondary: "#DF3C5F",
        accent: "#CADCFC",
      },
    },
  },
  plugins: [],
};
