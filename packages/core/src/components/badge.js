module.exports = Badge = (colors) => ({
  ".badge": {
    "@apply inline-block text-xs font-medium leading-4 text-center whitespace-nowrap flex justify-center items-center": {},

    "&-light": {
      "@apply text-neutral-900 bg-neutral-200 border border-transparent": {},
      "@apply dark:text-neutral-100 dark:bg-neutral-700": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply text-${color}-800 bg-${color}-100`]: {},
            [`@apply dark:text-${color}-400 dark:bg-${color}-500`]: {},
            "@apply dark:bg-opacity-15": {},
          },
        }),
        {}
      ),
    },

    "&-solid": {
      "@apply text-white bg-neutral-500 border border-transparent": {},
      "@apply dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700": {},
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply bg-${color}-500`]: {},
            [`@apply dark:text-${color}-400 dark:border-${color}-500 dark:bg-${color}-500`]: {},
            "@apply dark:bg-opacity-15": {},
            "@apply dark:border-opacity-40": {},
          },
        }),
        {}
      ),
      
    },

    "&-sm": {
      "@apply px-2 py-0.5": {},
      minWidth: "14px",
      height: "14px",
      lineHeight: "12px",
      borderRadius: "2em",
    },

    "&-md": {
      "@apply px-2.5 py-0.5": {},
      minWidth: "20px",
      height: "20px",
      lineHeight: "18px",
      borderRadius: "2em",
    },

    "&-lg": {
      "@apply px-3 py-1": {},
      minWidth: "20px",
      height: "22px",
      lineHeight: "18px",
      borderRadius: "2em",
    },

    "&-shadow": {
      "@apply ring-1 ring-white": {},
      "@apply dark:ring-black": {},
    },
  },
});
