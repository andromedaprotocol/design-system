import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PowerOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19'/>
          <path  d='M12 2v4'/>
          <path  d='M2 2l20 20'/>
        </svg>
    );
  }
);