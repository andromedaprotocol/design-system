import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

const variants = {
  solid: "tag-solid",
  outline: "tag-outline",
  light: "tag-light",
};

const sizes = {
  sm: "tag-sm",
  md: "tag-md",
  lg: "tag-lg",
  xl: "tag-xl",
};

export const useTagClass = createMemoClass((props) => {
  return cx("tag", sizes[props.size], variants[props.variant]);
});
