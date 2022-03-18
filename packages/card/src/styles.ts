import { createMemoClass } from "@andromedaprotocol/theme";
import { cx } from "@andromedaprotocol/utils";

type variantOptions = {
  [key: string]: string;
};

export const useCardClass = createMemoClass((props) => {
  const variantClasses: variantOptions = {
    elevation: "card-elevation",
    outlined: "card-outlined",
  };
  const classes = cx("card", variantClasses[props.variant]);

  return classes;
});
