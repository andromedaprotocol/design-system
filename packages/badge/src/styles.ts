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
  white : "badge-white",
};

const colorClasses = {
    solid: "badge-solid",
    outline: "badge-outline",
    light: "badge-light",
    white : "badge-white",
}

const sizes: sizeOptions = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

export const useBadgeClass = createMemoClass((props) => {
  return cx(
    variantClasses[props.variant],
    "badge font-medium",
    props.hasShadow && "badge-shadow",
    sizes[props.size],
  );
});

const GroupClasses = {
  solid: "badge-solid",
  light: "badge-light",
}


export const useBadgeGroupClass = createMemoClass((props) => {
  return cx(
    "badge-group",
    GroupClasses[props.variant]
  );
});
