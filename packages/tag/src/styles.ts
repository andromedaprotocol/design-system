import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

type sizeOptions = {
  [key: string]: string | number;
};

type variantOptions = {
  [key: string]: string;
};

const variants: variantOptions = {
  solid: "tag-solid",
  outline: "tag-outline",
  light: "tag-light",
};

const sizes: sizeOptions = {
  sm: "tag-sm",
  md: "tag-md",
  lg: "tag-lg",
  xl: "tag-xl",
};

export const useTagClass = createMemoClass((props) => {
  return cx("tag", sizes[props.size], variants[props.variant]);
});
