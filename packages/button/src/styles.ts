import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type variantOptions = {
  [key: string]: string;
};

type sizeOptions = {
  [key: string]: string | number;
};

export const useButtonClass = createMemoClass((props) => {
  const variantClasses: variantOptions = {
    outline: "btn-outline",
    solid: "btn-solid",
    ghost: "btn-ghost",
    light: "btn-light",
    link: "btn-link",
  };

  const sizes: sizeOptions = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
  };

  const classes = cx(
    "btn",
    sizes[props.size],
    variantClasses[props.variant],
    props.disabled && "btn-disabled"
  );

  return classes;
});
