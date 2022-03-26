const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./packages/*/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-children"),
    require("./packages/core")({
      colors: ["orange"],
      cssBase: true,
    }),
  ],
};
