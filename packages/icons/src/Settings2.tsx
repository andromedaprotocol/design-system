import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Settings2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <path  d='M20 7h-9'/>
          <path  d='M14 17H5'/>
          <circle  cx='17' cy='17' r='3'/>
          <circle  cx='7' cy='7' r='3'/>
        </svg>
    );
  }
);