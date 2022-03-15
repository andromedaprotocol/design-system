import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type variantOptions = {
  [key: string]: string;
};

type sizeOptions = {
  [key: string]: string | number;
};

const variantClasses: variantOptions = {
  solid: "badge-solid",
  outline: "badge-outline",
  light: "badge-light",
};

const sizes: sizeOptions = {
  sm: "badge-sm",
  md: "badge-md",
};

export const useBadgeClass = createMemoClass((props) => {
  return cx(
    "badge",
    props.hasShadow && "badge-shadow",
    sizes[props.size],
    variantClasses[props.variant]
  );
});
