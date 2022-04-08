import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useBadgeGroupClass } from "./styles";

interface IBadgeGroupProps extends DefaultProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "light";
  children?:React.ReactNode;
  position?: "left" | "right"
}

export interface BadgeGroupProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    IBadgeGroupProps {}

export const BadgeGroup = React.forwardRef<HTMLSpanElement, BadgeGroupProps>(
  (props, ref) => {
    const {
      color = "primary",
      variant = "light",
      size = "md",
      position = "left",
      className,
      children,
      ...rest
    } = props;
    const fontSize = size === 'md' ? 'text-sm' : (size === 'sm' ? 'text-xs' : 'text-base')
    const pos = position === 'left' ? 'pr-3' : 'pl-3';
    const classes = useBadgeGroupClass({ variant , color});
    return (
      <div
        role="group"
        className={cx('badge-group font-medium', classes, fontSize, pos)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  BadgeGroup.displayName = "BadgeGroup";
}
