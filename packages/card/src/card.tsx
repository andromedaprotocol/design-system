import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

interface ICardProps {
  /* React Node */
  children?: React.ReactNode
}

export interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    ICardProps {}

const Card = React.forwardRef<HTMLElement, CardProps>(
  (props) => {
    const {
      children,
      className,
    } = props;

    return (
      <div
        aria-label="Card"
        className={cx("w-auto p-5 border-[1px] shadow-md rounded-lg border-grey-200", className)}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Card.displayName = "Card";
}

export { Card };