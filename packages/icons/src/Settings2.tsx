import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Settings2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 7h-9'/>
          <path  d='M14 17H5'/>
          <circle  cx='17' cy='17' r='3'/>
          <circle  cx='7' cy='7' r='3'/>
        </svg>
    );
  }
);