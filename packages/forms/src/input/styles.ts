import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type sizeOptions = {
  [key: string]: string | number;
};

type variantOptions = {
  [key: string]: string;
};

export const useInputClass = createMemoClass((props) => {
  const variantClasses: variantOptions = {
    outline: "form-field-outline",
    solid: "form-field-solid",
  };

  const sizes: sizeOptions = {
    xs: "form-field-xs",
    sm: "form-field-sm",
    md: "form-field-md",
    lg: "form-field-lg",
    xl: "form-field-xl",
  };

  const classes = cx(
    "form-field",
    sizes[props.size],
    variantClasses[props.variant],
    props.disabled && "form-field-disabled"
  );

  return classes;
});
