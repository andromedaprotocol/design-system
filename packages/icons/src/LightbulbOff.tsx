import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LightbulbOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M9 18h6'/>
          <path  d='M10 22h4'/>
          <path  d='M2 2l20 20'/>
          <path  d='M8.91 14a4.61 4.61 0 00-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 01.084-1M9 2.804A6 6 0 0118 8a4.651 4.651 0 01-1.031 3'/>
        </svg>
    );
  }
);