/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
/* eslint-disable max-len */
const colors = require("tailwindcss/colors");
module.exports = {
  // darkMode: "class",
  content: [
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      margin: {},
      colors: {},
      boxShadow: {},
      borderRadius: {},
      fontSize: {},
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#2B2B2B",
          }
        }
      }
    }),
  ],
};
