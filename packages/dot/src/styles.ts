import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

type sizeOptions = {
  [key: string]: string | number;
};

type variantOptions = {
  [key: string]: string;
};

const variants: variantOptions = {
  solid: "dot-solid",
  outline: "dot-outline",
};

const sizes: sizeOptions = {
  "3xs": "dot-3xs",
  "2xs": "dot-2xs",
  xs: "dot-xs",
  sm: "dot-sm",
  md: "dot-md",
  lg: "dot-lg",
  xl: "dot-xl",
  "2xl": "dot-2xl",
  "3xl": "dot-3xl",
};

export const useDotClass = createMemoClass((props) => {
  return cx(
    "dot",
    props.bordered && "dot-bordered",
    sizes[props.size],
    variants[props.variant]
  );
});
