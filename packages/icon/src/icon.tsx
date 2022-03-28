import { DefaultProps } from "@andromedaprotocol/theme";
import { cx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";
import { Fallback } from "./lib";

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
    let flg = 0;
    try {
      const lucideComponent = (await import('lucide-react'))[fileName];
      if(!lucideComponent){
        flg = 1;
        const CustomComponent = (await import('./lib/' + fileName));
        setIconComponent(CustomComponent[fileName]);
      } else {
        flg = 1;
        setIconComponent(lucideComponent);
      }
    } catch (error) {
      setIconComponent(Fallback);
    }
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
      {
        IconComponent && <IconComponent 
        className={cx(inline ? "icon-inline" : "icon-block", className)}
        role={role}
        aria-hidden={true}
        focusable={false}
        {...rest}/>
      }
    </>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}
