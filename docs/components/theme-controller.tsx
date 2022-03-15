import * as React from "react";
import {
  AndromedaDesignSystemProvider,
  extendTheme,
  AndromedaDesignSystemProviderProps,
} from "@andromedaprotocol/react";

import { light, dark } from "@utils/themes";

export type ThemeContextType = {
  colorScheme?: string;
  radius?: string;
  density?: AndromedaDesignSystemProviderProps["density"];
  cursorPointer?: boolean;
  setColorScheme: (colorScheme: string) => void;
  setRadius: (radius: string) => void;
  setCursorPointer: (cursorPointer: boolean) => void;
  setDensity: (density: AndromedaDesignSystemProviderProps["density"]) => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const themes = [
  {
    name: "Light",
    id: "light",
    backgroundColor: light.colors.bg.base,
    primaryColor: light.colors.primary["500"],
  },
  {
    name: "Dark",
    id: "dark",
    backgroundColor: dark.colors.bg.base,
    primaryColor: dark.colors.primary["500"],
  },
];

export const radiusItems = [
  {
    name: "none",
    value: "none",
  },
  {
    name: "sm",
    value: "0.125rem",
  },
  {
    name: "md",
    value: "0.375rem",
  },
];

function ThemeController({ children }: { children: React.ReactNode }) {
  const [cursorPointer, setCursorPointer] = React.useState(false);
  const [radius, setRadius] = React.useState(radiusItems[2].value);
  const [colorScheme, setColorScheme] = React.useState(themes[0].id);
  const [density, setDensity] = React.useState<
    AndromedaDesignSystemProviderProps["density"]
  >("comfortable");

  const theme = React.useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? "pointer" : "default",
      rounded: radius,
      colorSchemes: {
        light,
        dark,
      },
    });
  }, [cursorPointer, radius]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        radius,
        cursorPointer,
        density,
        setColorScheme,
        setRadius,
        setCursorPointer,
        setDensity,
      }}
    >
      <AndromedaDesignSystemProvider
        theme={theme}
        colorScheme={colorScheme}
        density={density}
      >
        {children}
      </AndromedaDesignSystemProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType =>
  React.useContext(ThemeContext) || {
    colorScheme: "light",
    radius: "0.375rem",
    cursorPointer: false,
    setColorScheme: () => null,
    setRadius: () => null,
    setCursorPointer: () => null,
    setDensity: () => null,
  };

export default ThemeController;
