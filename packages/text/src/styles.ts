import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type sizeOptions = {
  [key: string]: string;
};

export const useTextClass = createMemoClass((props) => {
  const variantClasses: sizeOptions = {
    xs: "text-size-xs",
    sm: "text-size-sm",
    md: "text-size-md",
    lg: "text-size-lg",
    xl: "text-size-xl",
  };
  const classes = cx("text", variantClasses[props.size]);

  return classes;
});
