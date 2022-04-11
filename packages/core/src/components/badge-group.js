// TODO: how it works with prefix?
module.exports = BadgeGroup = (colors) => ({
    ".badge-group": {
      "@apply inline-block flex flex-row p-1 rounded-full items-center space-x-3": {},
    },
    "&-solid": {
        // "@apply": {},
        // "@apply dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700": {},
        ...colors.reduce(
          (styles, color) => ({
            ...styles,
            [`&[data-color="${color}"]`]: {
              [`@apply bg-${color}-50 text-${color}-600`]: {},
              [`@apply dark:text-${color}-400 dark:border-${color}-500 dark:bg-${color}-500`]: {},
              "@apply dark:bg-opacity-15": {},
              "@apply dark:border-opacity-40": {},
            },
          }),
          {}
        ),
        
      },
      "&-light": {
        "@apply text-white bg-neutral-500 border border-transparent": {},
        "@apply dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700": {},
        ...colors.reduce(
          (styles, color) => ({
            ...styles,
            [`&[data-color="${color}"]`]: {
              [`@apply bg-${color}-50 text-${color}-600`]: {},
              [`@apply dark:text-${color}-400 dark:border-${color}-500 dark:bg-${color}-500`]: {},
              "@apply dark:bg-opacity-15": {},
              "@apply dark:border-opacity-40": {},
            },
          }),
          {}
        ),
      },
  });
  