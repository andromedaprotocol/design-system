import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import VisuallyHidden from "@andromedaprotocol/visually-hidden";
import * as React from "react";
import { QuestionCircleIcon } from "./core";

export interface IconProps extends DefaultProps {
  name:string;
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
  const fileName = props.name;
  const [IconComponent, setIconComponent] = React.useState<any>();
  
  React.useEffect(() => {
    loadModule();
  }, [])

  const loadModule = async () => {
    const Info = await (await import('lucide-react'))[fileName];
    setIconComponent(Info);
  } 
  
  const {
    inline = true,
    className,
    role = "presentation",
    label,
    ...rest
  } = props;

  return (
    <>
      {IconComponent && <IconComponent 
        className={cx(inline ? "icon-inline" : "icon-block", className)}
        role={role}
        aria-hidden={true}
        focusable={false}
        {...rest}/>}
    </>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}
