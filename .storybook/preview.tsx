import {
  AndromedaDesignSystemProvider,
  extendTheme,
} from "@andromedaprotocol/react";
import { useState, useMemo } from "react";
import { withPerformance } from "storybook-addon-performance";
import { light, dark } from "./themes";

import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withAndromedaDesignSystem = (StoryFn: Function) => {
  const [colorScheme, setColorScheme] = useState("light");
  const theme = useMemo(
    () =>
      extendTheme({
        cursor: colorScheme === "light" ? "pointer" : "default",
        colorSchemes: {
          light,
          dark,
        },
      }),
    [colorScheme]
  );

  const density = colorScheme === "light" ? "comfortable" : "compact";

  return (
    <AndromedaDesignSystemProvider
      theme={theme}
      colorScheme={colorScheme}
      density={density}
    >
      <div
        id="story-wrapper"
        className="space-y-4"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex mb-4 justify-items-end">
          <button
            onClick={() =>
              setColorScheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            Change theme
          </button>
        </div>
        <StoryFn />
      </div>
    </AndromedaDesignSystemProvider>
  );
};

export const decorators = [withAndromedaDesignSystem, withPerformance];
