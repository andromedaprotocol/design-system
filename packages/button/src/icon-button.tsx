import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { Button, ButtonProps } from "./button";

type OmittedProps = "leftIcon" | "rightIcon" | "loadingText";

interface IIconButtonProps extends Omit<ButtonProps, OmittedProps> {
  /**
   * The icon to be used in the button.
   */
  icon?: React.ReactElement;
}

export interface IconButtonProps
  extends IIconButtonProps {
  /**
   * A11y: A label that describes the button
   */
  "aria-label"?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      children,
      "aria-label": ariaLabel,
      className,
      ...rest
    } = props;

    const classes = cx("btn-icon", className);

    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    return (
      <Button className={classes} ref={ref}  aria-label={ariaLabel} {...rest}>
        {children}
      </Button>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = "IconButton";
}
