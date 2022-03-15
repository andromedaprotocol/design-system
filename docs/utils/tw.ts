export const twFile = {
  name: "tailwind.config.js",
  code: `import colors from "tailwindcss/colors";

module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    }
  },
  variants: {
    extend: {},
  },
  // add plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@andromedaprotocol/core")({
      colors: ["orange"],
    }),
    // ...
  ],
};`,
  readOnly: true,
};

export const tabsEndClosedTWFile = {
  name: "tailwind.config.js",
  code: `module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@andromedaprotocol/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        inherit: "inherit",
      },
    }
  },
  variants: {
    extend: {},
  },
  // add plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@andromedaprotocol/core"),
    // ...
  ],
};`,
  readOnly: true,
};
