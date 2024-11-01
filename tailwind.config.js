/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#343232",
        secondary: "#4A4948",
        accent: "#4CAF50",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
