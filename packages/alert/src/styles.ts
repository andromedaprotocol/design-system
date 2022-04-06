import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

type variantOptions = {
  [key: string]: {};
};

const variantClasses: variantOptions = {
  gray : {
    subtle: "alert-subtle bg-gray-50 border-2 border-gray-300",
    solid: "alert-solid bg-gray-300 text-white",
    "left-accent": "alert-left-accent border-gray-300 border-l-4",
  },
  primary : {
    subtle: "alert-subtle bg-primary-50 border-2 border-primary-300",
    solid: "alert-solid bg-primary-300 text-white-700",
    "left-accent": "alert-left-accent border-primary-300 border-l-4",
  },
  success : {
    subtle: "alert-subtle bg-green-50 border-2 border-green-300",
    solid: "alert-solid bg-green-300 text-white",
    "left-accent": "alert-left-accent border-green-300 border-l-4",
  },
  warning : {
    subtle: "alert-subtle bg-yellow-50 border-2 border-yellow-300",
    solid: "alert-solid bg-yellow-300 text-white",
    "left-accent": "alert-left-accent border-yellow-300 border-l-4",
  },
  error : {
    subtle: "alert-subtle bg-pink-50 border-2 border-pink-300",
    solid: "alert-solid bg-pink-300 text-white",
    "left-accent": "alert-left-accent border-pink-300 border-l-4",
  },
};

type titleOptions = {
  [key: string]: {};
};

const titleClasses: titleOptions = {
  gray : {
    subtle: "text-gray-600",
    solid: "text-white",
    "left-accent": "text-gray-600",
  },
  primary : {
    subtle: "text-primary-600",
    solid: "text-white",
    "left-accent": "text-primary-600",
  },
  success : {
    subtle: "text-green-600",
    solid: "text-white",
    "left-accent": "text-green-600",
  },
  warning : {
    subtle: "text-yellow-600",
    solid: "text-white",
    "left-accent": "text-yellow-600",
  },
  error : {
    subtle: "text-pink-600",
    solid: "text-white",
    "left-accent": "text-pink-600",
  },
};

export const useAlertCloseButton = createMemoClass(() => {
  return cx("alert-close-button");
});

export const useAlertClass = createMemoClass((props) => {
  return cx("alert flex-col justify-start items-start text-start md:flex-row", variantClasses[props.color][props.variant]);
});

export const useAlertIconClass = createMemoClass((props) => {
  return cx("", titleClasses[props.color][props.variant]);
});
