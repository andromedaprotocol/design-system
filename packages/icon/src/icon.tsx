import * as React from "react";
import { IconNameMapper } from "@andromedaprotocol/icons";
import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import VisuallyHidden from "@andromedaprotocol/visually-hidden";

export interface IconProps extends DefaultProps {
  name: string;
  inline?: boolean;
  role?: string;
  color?: string;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
}

export const Icon = React.forwardRef<any, IconProps>((props, ref) => {
  const {
    name,
    inline = true,
    className,
    role = "presentation",
    label,
    ...rest
  } = props;

  const [IconComponent, setIconComponent] = React.useState<any>();

  const loadModule = async () => {
    const icon = (await import("@andromedaprotocol/icons"))[
      IconNameMapper[name] === undefined ? "help-circle" : IconNameMapper[name]
    ];
    setIconComponent(icon);
  };
  React.useEffect(() => {
    loadModule();
  });

  return (
    <>
      {IconComponent && (
        <>
          <IconComponent
            ref={ref}
            className={cx(inline ? "icon-inline" : "icon-block", className)}
            role={role}
            aria-hidden={true}
            focusable={false}
            {...rest}
          />
          <VisuallyHidden>{label}</VisuallyHidden>
        </>
      )}
    </>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}
