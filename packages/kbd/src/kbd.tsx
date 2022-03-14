import { cx, __DEV__ } from "@andromeda-design-system/utils";
import { DefaultProps } from "@andromeda-design-system/theme";
import * as React from "react";

interface IKbdProps extends DefaultProps {}

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    IKbdProps {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...rest }, ref) => {
    return <kbd ref={ref} className={cx("kbd", className)} {...rest} />;
  }
);

if (__DEV__) {
  Kbd.displayName = "Kbd";
}
