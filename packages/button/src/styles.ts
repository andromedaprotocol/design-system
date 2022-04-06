import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type variantOptions = {
  [key: string]: string;
};

type colorOptions = {
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
    link: "btn-link no-underline",
  };

  const colors: colorOptions = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    secondary: "bg-red-500 hover:bg-red-600 text-white",
    gray: "bg-gray-500 hover:bg-gray-600",
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
    colors[props.color],
    variantClasses[props.variant],
    props.disabled && "btn-disabled"
  );

  return classes;
});
