import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

import { useCardClass } from "./styles";

interface ICardProps {
  /** Controls card appearance */
  variant?: "elevation" | "outlined";

  /* React Node */
  children?: React.ReactNode;
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ICardProps {
  /**
   * A11y: A label that describes the card
   */
  "aria-label"?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    "aria-label": ariaLabel,
    variant = "elevation",
    ...rest
  } = props;

  const classes = useCardClass({
    variant,
  });

  return (
    <div
      ref={ref}
      aria-label={ariaLabel}
      className={cx(classes, className)}
      {...rest}
    >
      <div
        className={cx(
          "w-auto p-5 border-[1px] rounded-lg border-grey-200",
          variant === "elevation" && "shadow-md"
        )}
      >
        {children}
      </div>
    </div>
  );
});

if (__DEV__) {
  Card.displayName = "Card";
}

export { Card };
