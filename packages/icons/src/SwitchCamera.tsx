import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SwitchCamera = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5'/>
          <path  d='M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5'/>
          <circle  cx='12' cy='12' r='3'/>
          <path  d='M18 22l-3-3 3-3'/>
          <path  d='M6 2l3 3-3 3'/>
        </svg>
    );
  }
);