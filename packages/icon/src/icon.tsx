import * as React from "react";
// import { IconNameMapper } from "@andromedaprotocol/icons";
import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
// import VisuallyHidden from "@andromedaprotocol/visually-hidden";
import { QuestionCircleIcon } from "./core";

export interface IconProps extends DefaultProps {
  as?: React.ElementType;
  inline?: boolean;
  role?: string;
  color?: string;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
  name: string;
}

export const Icon = React.forwardRef<any, IconProps>((props, ref) => {
  const {
    as: Comp = QuestionCircleIcon,
    name,
    inline = true,
    className,
    role = "presentation",
    label,
    ...rest
  } = props;

  const [IconComponent, setIconComponent] = React.useState<any>();

  const loadModule = async () => {
    /**
    const icon = (await import("@andromedaprotocol/icons"))[
      IconNameMapper[name] === undefined ? "fallback" : IconNameMapper[name]
    ];
     */
    setIconComponent(null);
  };
  React.useEffect(() => {
    loadModule();
  });

  return (
    <>
      {IconComponent && (
        <IconComponent
          ref={ref}
          className={cx(inline ? "icon-inline" : "icon-block", className)}
          role={role}
          aria-hidden={true}
          focusable={false}
          {...rest}
        />
      )}
    </>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}
