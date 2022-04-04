import { cx } from "@andromedaprotocol/utils";
import { createMemoClass } from "@andromedaprotocol/theme";

type variantOptions = {
  [key: string]: string;
};

const variantClasses: variantOptions = {
  subtle: "alert-subtle",
  solid: "alert-solid",
  "left-accent": "alert-left-accent",
};

export const useAlertCloseButton = createMemoClass(() => {
  return cx("alert-close-button");
});

export const useAlertClass = createMemoClass((props) => {
  return cx("alert flex-col justify-start items-start text-start md:flex-row", variantClasses[props.variant]);
});
