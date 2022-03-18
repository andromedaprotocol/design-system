import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type sizeOptions = {
  [key: string]: string;
};

export const useDisplayTextClass = createMemoClass((props) => {
  const variantClasses: sizeOptions = {
    xs: "display-text-size-xs",
    sm: "display-text-size-sm",
    md: "display-text-size-md",
    lg: "display-text-size-lg",
    xl: "display-text-size-xl",
    "2xl": "display-text-size-2xl",
  };
  const classes = cx("display-text", variantClasses[props.size]);

  return classes;
});
