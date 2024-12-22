/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#ecdac6",
        },
      },
    ],
  },
  theme: {
    colors: {
      primary: "#ecdac6",
      oranges: "#c06445",
      white: "#ffffff",
      background: "#4e5341",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Archivo Black", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
