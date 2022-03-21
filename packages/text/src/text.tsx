import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useTextClass } from "./styles";

interface ITextProps {
  /** Controls text size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  /* The element or component to use in place of `p` */
  as?: React.ElementType;

  /* React Node */
  children?: React.ReactNode;
}

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    ITextProps {}

const Text = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { children, className, size = "md", as: Comp = "p", ...rest } = props;

  const classes = useTextClass({
    size,
  });

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
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
});

if (__DEV__) {
  Text.displayName = "Text";
}

export { Text };
