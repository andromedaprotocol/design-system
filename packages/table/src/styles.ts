import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

type variantOptions = {
  [key: string]: string;
};

const variantClasses: variantOptions = {
  striped : "children:first-of-type:children:odd:bg-gray-100",
  simple : "children:first-of-type:children:border-b border-[1px] border-b border-gray-200",
  unstyled: "",
};

export const useTableClass = createMemoClass((props) => {
  return cx("table", variantClasses[props.variant]);
});
