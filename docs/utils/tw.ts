export const twFile = {
  name: "tailwind.config.js",
  code: `import colors from "tailwindcss/colors";

module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@andromeda-protocol/design-system/**/*.{js,ts,jsx,tsx}", 
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
    require("@andromeda-protocol/design-system/core")({
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
    "./node_modules/@andromeda-protocol/design-system/**/*.{js,ts,jsx,tsx}", 
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
    require("@andromeda-protocol/design-system/core"),
    // ...
  ],
};`,
  readOnly: true,
};
