import { cx, __DEV__ } from "@andromedaprotocol/utils";
import { DefaultProps } from "@andromedaprotocol/theme";
import * as React from "react";

interface ICodeProps extends DefaultProps {}

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    ICodeProps {}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, ...rest }, ref) => {
    return <code ref={ref} className={cx("code", className)} {...rest} />;
  }
);

if (__DEV__) {
  Code.displayName = "Code";
}
