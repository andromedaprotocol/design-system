import { ColorScheme, colors } from "@andromedaprotocol/react";

// light theme
export const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: "white",
      fill: colors.gray["100"],
    },
    text: {
      foreground: colors.gray["900"],
      muted: colors.gray["700"],
    },
    primary: colors.purple,
    neutral: colors.gray,
  },
};

// dark theme
export const dark: ColorScheme = {
  id: "light",
  type: "dark",
  colors: {
    bg: {
      base: colors.gray["800"],
      fill: colors.gray["900"],
    },
    text: {
      foreground: colors.gray["100"],
      muted: colors.gray["300"],
    },
    primary: colors.purple,
    neutral: colors.gray,
  },
};
