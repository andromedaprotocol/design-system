import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useDisplayTextClass } from "./styles";

interface IDisplayTextProps {
  /** Controls display-text size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /* The element or component to use in place of `p` */
  as?: React.ElementType;

  /* React Node */
  children?: React.ReactNode;
}

export interface DisplayTextProps
  extends React.HTMLAttributes<HTMLElement>,
    IDisplayTextProps {}

const DisplayText = React.forwardRef<HTMLElement, DisplayTextProps>(
  (props, ref) => {
    const { children, className, size = "md", as: Comp = "p", ...rest } = props;

    const classes = useDisplayTextClass({
      size,
    });

    const sizeClasses = {
      xs: "text-2xl",
      sm: "text-3xl",
      md: "text-4xl",
      lg: "text-5xl",
      xl: "text-6xl",
      "2xl": "text-7xl",
    };

    return (
      <Comp
        ref={ref}
        className={cx(classes, sizeClasses[size], className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

if (__DEV__) {
  DisplayText.displayName = "DisplayText";
}

export { DisplayText };
