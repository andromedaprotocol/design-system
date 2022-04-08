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

const colorClasses = {
  gray : {
    solid: "badge-solid bg-gray-600 text-white",
    outline: "badge-outline border-gray-600 border-[1px] bg-gray-50 text-gray-600",
    light: "badge-light bg-gray-50 text-gray-600",
    white : "badge-white bg-white text-gray-600",
  },
  primary : {
    solid: "badge-solid text-white bg-primary-600",
    outline: "badge-outline border-primary-600 border-[1px] bg-primary-50 text-primary-600",
    light: "badge-light bg-primary-50 text-primary-600",
    white : "badge-light bg-white text-primary-600",
  },
  success : {
    solid: "badge-solid text-white bg-success-600",
    outline: "badge-outline border-success-600 border-[1px] bg-success-50 text-success-600",
    light: "badge-light bg-success-50 text-success-600",
    white : "badge-light bg-white text-success-600",
  },
  error : {
    solid: "badge-solid text-white bg-error-600",
    outline: "badge-outline border-error-600 border-[1px] bg-error-50 text-error-600",
    light: "badge-light bg-error-50 text-error-600",
    white : "badge-light bg-white text-error-600",
  },
  warning : {
    solid: "badge-solid text-white bg-warning-600",
    outline: "badge-outline border-warning-600 border-[1px] bg-warning-50 text-warning-600",
    light: "badge-light bg-warning-50 text-warning-600",
    white : "badge-light bg-white text-warning-600",
  },
}

const sizes: sizeOptions = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

export const useBadgeClass = createMemoClass((props) => {
  return cx(
    "badge font-medium",
    props.hasShadow && "badge-shadow",
    sizes[props.size],
    colorClasses[props.color][props.variant]
  );
});

const GroupClasses = {
  gray : {
    solid: "bg-gray-100 text-gray-600",
    light: "bg-gray-50 text-gray-600",
  },  
  primary : {
    solid: "bg-primary-100 text-primary-600",
    light: "bg-primary-50 text-primary-600",
  },
  success : {
    solid: "bg-success-100 text-success-600",
    light: "bg-success-50 text-success-600",
  },
  error : {
    solid: "bg-error-100 text-error-600",
    light: "bg-error-50 text-error-600",
  },
  warning : {
    solid: "bg-warning-100 text-warning-600",
    light: "bg-warning-50 text-warning-600",
  }
}


export const useBadgeGroupClass = createMemoClass((props) => {
  return cx(
    "badge-group flex flex-row p-1 rounded-full items-center space-x-3",
    GroupClasses[props.color][props.variant]
  );
});
