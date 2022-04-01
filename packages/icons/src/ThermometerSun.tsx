import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ThermometerSun = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 9a4 4 0 00-2 7.5'/>
          <path  d='M12 3v2'/>
          <path  d='M6.6 18.4l-1.4 1.4'/>
          <path  d='M18 2a2 2 0 012 2v10.5a4 4 0 11-4 0V4c0-1.1.9-2 2-2z'/>
          <path  d='M4 13H2'/>
          <path  d='M6.6 7.6L5.2 6.2'/>
        </svg>
    );
  }
);