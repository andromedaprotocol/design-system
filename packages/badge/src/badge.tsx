import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useBadgeClass } from "./styles";

interface IBadgeProps extends DefaultProps {
  /* The color of badge */
  color?: "primary" | "success" | "error" | "warning" | "gray" | string;
  /* Controls badge appearance */
  variant?: "solid" | "light" | "outline" | "white";
  /* The size of badge */
  size?: "sm" | "md" | "lg";
  /* If `true` badge has shadow */
  hasShadow?: boolean;
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    IBadgeProps {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const {
      color = "primary",
      variant = "light",
      className,
      size = "md",
      hasShadow = false,
      ...rest
    } = props;
    const classes = useBadgeClass({ variant, hasShadow, size, color });
    return (
      <span
        ref={ref}
        data-color={`${color}`}
        className={cx(classes, className)}
        {...rest}
      />
    );
  }
);

if (__DEV__) {
  Badge.displayName = "Badge";
}
