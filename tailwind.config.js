/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      width: {
        "26px": "26px",
        "23px": "23px",
      },
      colors: {
        "dark-background": "rgb(4 4 4)",
        "dark-transparent-background": "rgba(0, 0, 0, 0.65)",
        "dark-border": "rgb(47, 51, 54)",
        "dark-grey": "rgb(113, 118, 123)",
        "dark-light-grey": "rgb(22, 24, 28)",
        "dark-overlay": "rgba(91, 112, 131, 0.4)",
        main: "rgb(29, 155, 240)",
      },
    },
  },
};
