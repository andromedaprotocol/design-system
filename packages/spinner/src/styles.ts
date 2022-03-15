import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type sizeOptions = {
  [key: string]: string | number;
};

const sizes: sizeOptions = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

export default createMemoClass((props) => {
  const className = cx("animate-spin", sizes[props.size]);

  return className;
});
