/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    theme: [

      {
        doctorTheme: {

          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#37CDBE",

        },
      },
    ],
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}