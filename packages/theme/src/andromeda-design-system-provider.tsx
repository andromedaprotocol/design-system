import {
  walkObject,
  omit,
  toRGB,
  deepmerge,
  WithCSSVar,
  Dict,
} from "@andromedaprotocol/utils";
import * as React from "react";
import { createContext, useContext, useMemo } from "react";
import set from "lodash.set";
import { Global } from "@emotion/react";

import { defaultTheme } from "./default-theme";
import { toCSSVar } from "./create-theme-vars";
import { isBrowser } from "./utils";
import { AndromedaTheme, AndromedaThemeOverride } from "./types";

interface DictAndromedaTheme extends Dict {}

export const AndromedaDesignSystemContext = createContext<
  | {
      theme: WithCSSVar<DictAndromedaTheme>;
    }
  | undefined
>(undefined);

AndromedaDesignSystemContext.displayName = "AndromedaDesignSystemContext";

export interface AndromedaDesignSystemProviderProps {
  children: React.ReactNode;
  theme?: AndromedaTheme;
  density?: "compact" | "comfortable" | "unset";
  colorScheme?: string;
  cssVarsRoot?: string;
}

export function AndromedaDesignSystemProvider({
  theme = defaultTheme,
  colorScheme = "light",
  density = "comfortable",
  cssVarsRoot = ":host, :root",
  children,
}: AndromedaDesignSystemProviderProps) {
  const computedTheme = useMemo(() => {
    const omittedTheme = omit(theme, ["colorSchemes", "density"]);
    const { colors, type } = theme.colorSchemes[colorScheme] || {};
    if (isBrowser) {
      if (type === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }

    walkObject(colors, (value, path) => {
      if (typeof value !== "string") return;
      const rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(","));
    });

    const normalizedTheme = {
      ...omittedTheme,
      density: theme.density[density],
      colors,
    };

    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme, density]);

  const value = useMemo(
    () => ({
      theme: computedTheme,
    }),
    [computedTheme]
  );

  return (
    <AndromedaDesignSystemContext.Provider value={value}>
      {/* FIXME: Emotion alernative */}
      <Global styles={() => ({ [cssVarsRoot]: computedTheme.__cssVars })} />
      {children}
    </AndromedaDesignSystemContext.Provider>
  );
}

export function useAndromeDesignSystem<T extends object = Dict>() {
  const theme = useContext(
    (AndromedaDesignSystemContext as unknown) as React.Context<T | undefined>
  );
  if (!theme) {
    throw Error(
      "useAndromeDesignSystem: `theme` is undefined. Seems you forgot to wrap your app in `<AndromedaDesignSystemProvider />`"
    );
  }

  return theme as WithCSSVar<T>;
}

export function extendTheme(
  themeOverride: AndromedaThemeOverride
): AndromedaTheme {
  return deepmerge(defaultTheme, themeOverride, {
    clone: true,
  }) as AndromedaTheme;
}
